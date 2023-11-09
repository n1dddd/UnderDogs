import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./ProductPage.module.scss"
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useProductsStore } from '../stores/productsStore';
import Loading from '../components/Loading';
import ParticlesBackground from '../components/ParticlesBackground';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const ProductPage = () => {
  const { id } = useParams();
  const setActiveProduct = useProductsStore((state) => state.setActiveProduct)
  const activeProduct = useProductsStore((state) => state.activeProduct)
  const getSetProduct = async () => {
    const displayProduct = await getDoc(doc(db, "products", id))
    const productPriceQuerySnapshot = await getDocs(collection(db, "products", id, "prices"))
    productPriceQuerySnapshot.forEach((doc) => {
      setActiveProduct({ ...displayProduct.data(), unit_amount: doc.data().unit_amount, id: displayProduct.id })
    })
  }
  useEffect(() => {
    setActiveProduct({})
    getSetProduct();
  }, [])

  if (isNaN(activeProduct.unit_amount)) {
    return (
      <Loading />
    )
  } else if (activeProduct.unit_amount === 0) {
    return (
      <>
        <ParticlesBackground />
        <div className={styles.headerContainer}>
          <Banner />
          <Navbar />
        </div>
        <div className={styles.displayProductContainer}>
          <div className={styles.productImgContainer}>
            <img className={styles.displayImg} src={activeProduct.images} />
          </div>
          <div className={styles.productDescriptorContainer}>
            <h2 className={styles.displayProductHeader}>{activeProduct.name}</h2>
            <p className={styles.displayProductDescription}>{activeProduct.description}</p>
            <p className={styles.displayProductPrice}>${activeProduct.unit_amount / 100}</p>
          </div>
        </div >
      </>
    )
  } else {
    return (
      <>
        <ParticlesBackground />
        <div className={styles.headerContainer}>
          <Banner />
          <Navbar />
        </div>
        <div className={styles.displayProductContainer}>
          <div className={styles.productImgContainer}>
            <img className={styles.displayImg} src={activeProduct.images} />
          </div>
          <div className={styles.productDescriptorContainer}>
            <h2 className={styles.displayProductHeader}>{activeProduct.name}</h2>
            <p className={styles.displayProductDescription}>{activeProduct.description}</p>
            <p className={styles.displayProductPrice}>${activeProduct.unit_amount / 100}</p>
          </div>
        </div >
      </>
    )
  }

}


export default ProductPage