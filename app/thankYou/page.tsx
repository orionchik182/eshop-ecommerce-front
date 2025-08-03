"use client";
import styles from "@/app/thankYou/thankYou.module.scss";

import { useCart } from "@/components/features/CartContext";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { emptyCart } = useCart();

  useEffect(() => {
    emptyCart();
  }, [emptyCart]);

  return (
    <>
      <Header />
      <div className="center">
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>Thank You</h1>
          <h2>We will email you when order will be sent.</h2>
          <Link href={"/"} className="btn btn-primary btn--flex w-40">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
