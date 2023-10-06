import { useEffect } from "react";
import { useProductsStore } from "../stores/productsStore";
import { useCategoriesStore } from "../stores/categoriesStore";
import styles from "./ProductComponent.module.scss";
import CartButtonComponent from "./CartButtonComponent";
import { useNavigate } from "react-router-dom";

const ProductComponent = () => {
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

    const handleProductRedirect = (product) => {
        navigate("/products/" + product.id)
    }

    const fileComponent = statefulProducts.map((product, index) => {
        return (
            <div key={index} className={styles.productContainer}>
                <img onClick={() => handleProductRedirect(product)} className={styles.productFileIcon} src={product.images[0]} />
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>${product.unit_amount / 100}</p>
                <CartButtonComponent product={product} />
            </div>

        )
    })
    return (
        <>
            <div className={styles.allProductsContainer}>
                {fileComponent}

            </div >
        </>
    )
}

export default ProductComponent