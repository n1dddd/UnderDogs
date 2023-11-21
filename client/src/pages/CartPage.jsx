import React from 'react'
import { useCartStore } from '../stores/cartStore';
import ParticlesBackground from '../components/ParticlesBackground';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import styles from "./CartPage.module.scss";
import XSymbol from "../assets/XSymbol.svg"
import CheckoutBar from '../components/CheckoutBar';

const CartPage = () => {
    const statefulCart = useCartStore((state) => state.cart)
    console.log(statefulCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const productsInCart = statefulCart.map((product, index) => {
        return (
            <div key={index} className={styles.checkoutContainer}>
                <div className={styles.productImgContainer}>
                    <img className={styles.productFileIcon} src={product.product.images[0]} />
                </div>
                <p className={styles.productName}>{product.product.name}</p>
                <p className={styles.productPrice}>${product.product.unit_amount / 100}</p>
                <img className={styles.removeX} src={XSymbol} onClick={() => removeFromCart(product)} onTouchStart={() => removeFromCart(product)} />
            </div>
        )
    })

    return (
        <div className={styles.cartPageContainer}>
            <ParticlesBackground />
            <div className={styles.headerContainer}>
                <Banner />
                <Navbar />
            </div>
            <section className={styles.cartPageContent}>
                <div className={styles.cartContainer}>
                    {productsInCart}
                </div>
                <CheckoutBar />
            </section>
        </div>
    )
}

export default CartPage