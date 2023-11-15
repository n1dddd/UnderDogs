import React from 'react'
import { useCartStore } from '../stores/cartStore';
import ParticlesBackground from '../components/ParticlesBackground';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import styles from "./CartPage.module.scss";

const CartPage = () => {
    const statefulCart = useCartStore((state) => state.cart)
    console.log(statefulCart)
    return (
        <div className={styles.cartPageContainer}>
            <ParticlesBackground />
            <div className={styles.headerContainer}>
                <Banner />
                <Navbar />
            </div>
            <section className={styles.cartPageContent}>
                <div className={styles.cartItems}>

                </div>
                <div className={styles.cartInfo}>

                </div>
            </section>
        </div>
    )
}

export default CartPage