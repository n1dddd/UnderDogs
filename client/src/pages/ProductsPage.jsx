import styles from "./ProductsPage.module.scss"
import { useProductsStore } from "../stores/productsStore"
import ParticlesBackground from "../components/ParticlesBackground";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import { Suspense } from "react";
import { resolvePath } from "react-router-dom";

const ProductsPage = () => {
    const productStore = useProductsStore((state) => state.products);
    console.log(productStore);
    const productsComponentArray = productStore.map((product, index) => {
        return (
            <div key={index} className={styles.allProductsContainer}
                onClick={() => console.log(product)}>
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
                <Suspense fallback={<Loading />}>
                    <div className={styles.productsList}>
                        {productsComponentArray}
                    </div>
                </Suspense>
            </div >
        </>
    )
}

export default ProductsPage