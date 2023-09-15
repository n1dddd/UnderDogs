import { useEffect } from "react";
import { useProductsStore } from "../stores/productsStore";
import { useCategoriesStore } from "../stores/categoriesStore";
import styles from "./ProductComponent.module.scss";

const ProductComponent = () => {
    const statefulProducts = useProductsStore((state) => state.filteredProducts);
    const activeCategory = useCategoriesStore((state) => state.activeCategory);
    const products = useProductsStore((state) => state.products);
    const setFilteredProducts = useProductsStore((state) => state.setFilteredProducts);

    useEffect(() => {
        const getFilteredProducts = () => {
            let filteredProducts = products.filter((product) => {
                return product.category === activeCategory;
            })
            console.log(filteredProducts)
            setFilteredProducts(filteredProducts)
        };
        getFilteredProducts();
    }, [activeCategory])

    const fileComponent = statefulProducts.map((product, index) => {
        return (

            <div key={index} className={styles.productContainer}>
                <img className={styles.productFileIcon} src={product.img} />
                <p className={styles.productName}>{product.name}</p>
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