"use client";

import { useCart } from "../features/CartContext";

export default function CartHeader() {
  const { cartProducts } = useCart();
  return <span>{`(${cartProducts.length})`}</span>;
}
