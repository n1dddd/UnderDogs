import React from 'react'
import { useCategoriesStore } from '../stores/categoriesStore'
import styles from "./CartSideBar.module.scss";

const CartSideBar = () => {
    const activeCategory = useCategoriesStore((state) => state.activeCategory);
    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory)
    const activeCategoryHeader = () => {
        if (activeCategory === "cart") {
            return (
                <h1 className={styles.cartHeader__active}>Cart</h1>
            )
        }
        else {
            return (
                <h1 onClick={() => setActiveCategory("cart")} className={styles.cartHeader}>Cart</h1>
            )
        }

    }
    return (
        activeCategoryHeader()
    )
}

export default CartSideBar