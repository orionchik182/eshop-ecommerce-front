import styles from "@/components/layout/Product.module.scss";
import Image from "next/image";

import Link from "next/link";
import AddToCartButton from "../ui/AddToCartButton";
import CartIcon from "../ui/CartIcon";

export default function Product({
  _id,
  title,

  price,
  images,
}: ProductType) {
  const url = "/products/product/" + _id;
  return (
    <div>
      <Link href={url} className={styles.box}>
        {images?.length > 0 ? (
          <Image
            src={images[0]}
            alt={title}
            fill
            className={styles.imageResponsive}
          />
        ) : (
          "No image"
        )}
      </Link>
      <div className={styles.infoBox}>
        <Link href={url} className={styles.h2}>
          {title}
        </Link>
        <div className={styles.priceRow}>
          <div className={styles.price}>${price}</div>
          <AddToCartButton
            id={_id.toString()}
            className="btn btn-primary btn-cart"
          >
            <CartIcon size="size-6" />
          </AddToCartButton>
        </div>
      </div>
    </div>
  );
}
