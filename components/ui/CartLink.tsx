"use client";

import styles from "@/components/ui/CartLink.module.scss";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../features/CartContext";

export default function CartLink() {
  const context = useContext(CartContext);
  

  if (!context) {
    return null;
  }

  const { cartProducts } = context;

  return (
    <Link href={"/cart"} className={styles.navLink}>
      Cart ({cartProducts.length})
    </Link>
  );
}
