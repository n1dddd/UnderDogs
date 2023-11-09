import { useEffect } from "react";
import styles from "./ProductsPage.module.scss"
import { useProductsStore } from "../stores/productsStore"
import { useCategoriesStore } from "../stores/categoriesStore";
import ParticlesBackground from "../components/ParticlesBackground";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const navigate = useNavigate();
    const statefulProducts = useProductsStore((state) => state.filteredProducts);
    const activeCategory = useCategoriesStore((state) => state.activeCategory);
    const products = useProductsStore((state) => state.products);
    const setFilteredProducts = useProductsStore((state) => state.setFilteredProducts);
    useEffect(() => {
        const getFilteredProducts = () => {
            let filteredProducts = products.filter((product) => {
                return product.stripe_metadata_category
                    === activeCategory || product.category === activeCategory;
            })
            setFilteredProducts(filteredProducts)
        };
        getFilteredProducts();
    }, [activeCategory])
    const filteredProductComponentArray = statefulProducts.map((product, index) => {
        return (
            <div key={index} className={styles.allProductsContainer}
                onClick={() => navigate(`/products/${product.id}`)}>
                <img className={styles.productImg} src={product.images[0]} />
            </div>
        )
    })
    const allProductsComponentArray = products.map((product, index) => {
        return (
            <div key={index} className={styles.allProductsContainer}
                onClick={() => navigate(`/products/${product.id}`)}>
                <img className={styles.productImg} src={product.images[0]} />
            </div>
        )
    })
    return (
        <>
            <ParticlesBackground />
            <div className={styles.productsPageContainer}>
                <div className={styles.headerContainer}>
                    <Banner />
                    <Navbar />
                </div>
                <div className={styles.productsList}>
                    {activeCategory ? filteredProductComponentArray : allProductsComponentArray}
                </div>
            </div >
        </>
    )
}

export default ProductsPage