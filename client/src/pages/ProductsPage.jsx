import styles from "./ProductsPage.module.scss"
import { useProductsStore } from "../stores/productsStore"
import ParticlesBackground from "../components/ParticlesBackground";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
    const productStore = useProductsStore((state) => state.products);
    console.log(productStore);
    const productsComponentArray = productStore.map((product, index) => {
        return (
            <div key={index} className={styles.allProductsContainer}
                onClick={() => console.log(product)}>
                <img src={product.images[0]} />
            </div>
        )
    })
    return (
        <>
            <ParticlesBackground />
            <div className={styles.productsPageContainer}>
                <Banner />
                <Navbar />
                {productsComponentArray}
            </div>
        </>
    )
}

export default ProductsPage