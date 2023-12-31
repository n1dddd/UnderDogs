import HomePage from './pages/HomePage'
import "./scss/styles.scss"
import { useCategoriesStore } from './stores/categoriesStore.js';
import { useProductsStore } from "./stores/productsStore.js";
import { Suspense, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase.js"
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "../src/context/AuthContext"
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import About from './pages/About';
import CartPage from './pages/CartPage.jsx';


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
    const products = querySnapshot.docs.map(async (doc) => {
      const pricesCollection = collection(doc.ref, "prices");
      const priceQuerySnapshot = await getDocs(pricesCollection);
      const productPrices = priceQuerySnapshot.docs.map((priceDoc) => {
        let productPriceData = priceDoc.data();
        return { id: doc.id, ...doc.data(), unit_amount: productPriceData.unit_amount, priceId: priceDoc.id }
      })
      return productPrices;
    })
    Promise.all(products).then(function (results) {
      const allProducts = results.flat();
      setProducts(allProducts);
    })
  }

  useEffect(() => {
    getCategoryInformation();
    getProductInformation();
  }, [])

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App
