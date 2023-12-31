import React from 'react'
import styles from "./CheckoutBar.module.scss"
import getStripe from '../../lib/getStripe.js'
import { useCartStore } from '../stores/cartStore.js';
import { collection, addDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase.js"
import { useUserStore } from '../stores/userStore.js';

const CheckoutBar = () => {

    const statefulCart = useCartStore((state) => state.cart)
    const statefulUser = useUserStore((state) => state.user)
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
        console.log(formatedCheckout())
        let cart = formatedCheckout();
        const newCartSession = await addDoc(collection(db, 'customers', statefulUser.uid, 'checkout_sessions'), {
            line_items: cart,
            mode: "payment",
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        })
        const checkoutCart = onSnapshot(doc(db, "customers", statefulUser.uid, 'checkout_sessions', newCartSession.id), async (doc) => {
            let docData = doc.data();
            if (docData.url) {
                const sessionId = docData.sessionId;
                const stripe = await getStripe();
                await stripe.redirectToCheckout({ sessionId })
            }
        })
        return checkoutCart;

    }
    return (
        <div className={styles.checkoutBar}>
            <h1 className={styles.subTotalText}>Subtotal: CAD ${getSubtotal()}</h1>
            <button className={styles.checkoutButton} onClick={() => handleCheckout()}>Check out</button>
        </div>
    )
}

export default CheckoutBar

