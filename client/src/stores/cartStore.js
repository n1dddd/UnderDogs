import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    cartView: false,
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}))