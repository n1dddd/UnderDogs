import { create } from "zustand";

export const useProductsStore = create((set) => ({
    products: [],
    activeProduct: "",
    setProducts: (dbProducts) => set({ products: dbProducts }),
    setActiveProduct: (selectedProduct) => set({ activeProduct: selectedProduct })
}))