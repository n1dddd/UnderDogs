import React from 'react'
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.js"
import { useCategoriesStore } from '../stores/categoriesStore.js';
import styles from "./FinderComponentCategories.module.scss"

const FinderComponentCategories = () => {

    const setActiveCategory = useCategoriesStore((state) => state.setActiveCategory);
    const setCategories = useCategoriesStore((state) => state.setCategories)
    const statefulCategories = useCategoriesStore((state) => state.categories)
    const getCategoryInformation = async () => {
        const querySnapshot = await getDocs(collection(db, "shop"));
        const storeCategories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(storeCategories[0].category)
        setCategories(storeCategories[0].category);
    }
    console.log(statefulCategories)

    useEffect(() => {
        getCategoryInformation();
    }, [])

    const productCategories = statefulCategories.map((category, index) => {
        return (
            <div key={index} className={styles.categoryName}>{category}</div>
        )
    })
    return (
        <>{productCategories}</>
    )
}

export default FinderComponentCategories