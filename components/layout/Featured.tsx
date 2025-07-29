import styles from "@/components/layout/Featured.module.scss";
import { getProducts } from "@/lib/data-service";
import Image from "next/image";

import clsx from "clsx";
import AddToCartButton from "../ui/AddToCartButton";
import CartIcon from "../ui/CartIcon";
import Link from "next/link";

export default async function Featured() {
  const products = await getProducts();
  const url = "/products/product/" + products[0]._id;

  return (
    <div className={styles.bg}>
      <div className={clsx(styles.wrapper, "center")}>
        <div className={styles.column}>
          <div>
            <h1 className={styles.h1}>{products[0].title}</h1>
            <p className={styles.p}>{products[0].description}</p>
            <div className={styles.buttons}>
              <Link href={url} className="btn btn--l btn-trans">
                Read more
              </Link>
              <AddToCartButton
                id={products[0]._id.toString()}
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
        <div className={styles.column}>
          <Image
            alt="product image"
            src={products[0].images[0]}
            width={300}
            height={300}
            className={styles.imageResponsive}
          />
        </div>
      </div>
    </div>
  );
}
