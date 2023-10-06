import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./ProductPage.module.scss"
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useProductsStore } from '../stores/productsStore';

const ProductPage = () => {
  const { id } = useParams();
  const setActiveProduct = useProductsStore((state) => state.setActiveProduct)
  const activeProduct = useProductsStore((state) => state.activeProduct)
  const getSetProduct = async () => {
    const docRef = doc(db, "products", id)
    const document = await getDoc(docRef)
    const docData = document.data();
    console.log(docData)
    setActiveProduct(docData);
  }
  useEffect(() => {
    getSetProduct();
  }, [])

  return (
    <div className={styles.displayProductContainer}>
      <img className={styles.displayImg} src={activeProduct.images} />
    </div>
  )
}


export default ProductPage