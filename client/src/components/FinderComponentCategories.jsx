import React from 'react'
import styles from "./FinderComponentCategories.module.scss"
import { useCategoriesStore } from '../stores/categoriesStore.js';

const FinderComponentCategories = () => {

    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory);
    const statefulCategories = useCategoriesStore((state) => state.categories)


    const productCategories = statefulCategories.map((category, index) => {
        return (
            <h1 key={index} className={styles.categoryName}>{category}</h1>
        )
    })
    return (
        <>{productCategories}</>
    )
}

export default FinderComponentCategories