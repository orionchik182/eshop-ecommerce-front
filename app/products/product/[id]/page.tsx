import styles from "@/app/products/product/[id]/page.module.scss";
import Header from "@/components/layout/Header";
import AddToCartButton from "@/components/ui/AddToCartButton";
import BackButton from "@/components/ui/BackButton";
import CartIcon from "@/components/ui/CartIcon";
import { MyCarousel } from "@/components/ui/MyCarousel";

import { getProductById } from "@/lib/data-service";

import React from "react";

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = JSON.parse(JSON.stringify(await getProductById(id)));
  return (
    <>
      <Header />
      <div className="center">
        <div className={styles.wrapper}>
          <div className={styles.carousel}>
            <MyCarousel product={product} />
          </div>

          <div className={styles.descWrapper}>
            <div className={styles.h1}>{product.title}</div>
            <p className={styles.p}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
            <div className={styles.buttons}>
              <BackButton />
              <AddToCartButton
                id={product._id.toString()}
                className="btn btn--l btn-primary btn-svg"
              >
                <div className={styles.svg}>
                  <CartIcon />
                </div>
                <span className={styles.span}>Add to cart</span>
              </AddToCartButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
