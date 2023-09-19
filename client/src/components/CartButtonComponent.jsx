import React, { useEffect } from 'react'
import daBag from "../assets/dabag.png"
import styles from "./CartButtonComponent.module.scss"
import { useCartStore } from '../stores/cartStore'


const CartButtonComponent = (product) => {

    const addToCart = useCartStore((state) => state.addToCart)
    const inBag = useCartStore((state) => state.cart);
    return (
        <div onClick={() => addToCart(product)} onTouchStart={() => addToCart(product)}>
            <img src={daBag} className={styles.addToCartIcon} onClick={() => console.log(inBag)} />
        </div>
    )
}

export default CartButtonComponent