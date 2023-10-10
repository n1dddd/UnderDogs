import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./ProductPage.module.scss"
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useProductsStore } from '../stores/productsStore';
import CartButtonComponent from '../components/CartButtonComponent';
import ProductCartButton from '../components/ProductCartButton';

const ProductPage = () => {
  const { id } = useParams();
  const setActiveProduct = useProductsStore((state) => state.setActiveProduct)
  const activeProduct = useProductsStore((state) => state.activeProduct)
  const products = useProductsStore((state) => state.products)
  console.log(products);
  const getSetProduct = async () => {
    const displayProduct = products.find((product) => product.id === id)
    console.log(displayProduct)
    setActiveProduct(displayProduct)
  }
  useEffect(() => {
    getSetProduct();
  }, [products])

  return (
    <div className={styles.displayProductContainer}>
      <img className={styles.displayImg} src={activeProduct.images} />
      <h1 className={styles.displayProductHeader}>{activeProduct.name}</h1>
      <p className={styles.displayProductDescription}>{activeProduct.description}</p>
      <p className={styles.displayProductPrice}>${activeProduct.unit_amount / 100}</p>
      <ProductCartButton product={activeProduct} />
    </div>
  )
}


export default ProductPage