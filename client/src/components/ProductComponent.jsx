import { useProductsStore } from "../stores/productsStore";
import styles from "./ProductComponent.module.scss";

const ProductComponent = () => {
    const statefulProducts = useProductsStore((state) => state.products);
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