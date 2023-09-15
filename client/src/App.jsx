import HomePage from './pages/HomePage'
import "./scss/styles.scss"
import { useCategoriesStore } from './stores/categoriesStore.js';
import { useProductsStore } from "./stores/productsStore.js";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase.js"


function App() {
  const setCategories = useCategoriesStore((state) => state.setCategories)
  const setProducts = useProductsStore((state) => state.setProducts)
  const getCategoryInformation = async () => {
    const querySnapshot = await getDocs(collection(db, "shop"));
    const storeCategories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setCategories(storeCategories[0].category);
  }
  const getProductInformation = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log(products);
    setProducts(products)
  }





  useEffect(() => {
    getCategoryInformation();
    getProductInformation();
  }, [])

  return (
    <HomePage />
  )
}

export default App
