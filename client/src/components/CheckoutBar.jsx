import React from 'react'
import styles from "./CheckoutBar.module.scss"
import getStripe from '../../lib/getStripe'
import { useCartStore } from '../stores/cartStore';

const CheckoutBar = () => {

    const statefulCart = useCartStore((state) => state.cart)

    const getSubtotal = () => {
        const finalCart = [...statefulCart]
        let subTotalInCents = 0;
        console.log(finalCart);
        finalCart.forEach((product) => {
            subTotalInCents += product.product.unit_amount;
        })
        return subTotalInCents / 100
    }

    const formatedCheckout = () => {
        const finalCart = [...statefulCart]
        console.log(finalCart);
        return finalCart.map((product) => {
            return {
                price: product.product.priceId,
                quantity: 1
            }
        })
    }

    const handleCheckout = async () => {
        let cart = formatedCheckout();
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: cart,
            mode: 'payment',
            successUrl: "http://localhost:5173/",
            cancelUrl: "http://localhost:5173/"
        });
        console.log(error.message);
    }
    return (
        <div className={styles.checkoutBar}>
            <h1 className={styles.subTotalText}>Subtotal: CAD ${getSubtotal()}</h1>
            <button className={styles.checkoutButton} onClick={() => handleCheckout()}>Check out</button>
        </div>
    )
}

export default CheckoutBar