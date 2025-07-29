"use client";

import { useContext } from "react";

import { CartContext } from "../features/CartContext";

export default function AddToCartButton({ id, children, className }: { id: string, children?: React.ReactNode, className: string }) {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "AddToCartButton must be used within a CartContextProvider"
    );
  }

  const { addProduct } = context;

  function addFeaturedToCart() {
    addProduct(id);
  }
  return (
    <button onClick={addFeaturedToCart} className={className}>
      
      {children}
    </button>
  );
}
