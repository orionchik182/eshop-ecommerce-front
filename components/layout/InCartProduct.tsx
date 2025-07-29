import styles from "@/components/layout/InCartProduct.module.scss";
import { useCart } from "../features/CartContext";
import Image from "next/image";

export default function InCartProduct({ product }: { product: ProductType }) {
  const { cartProducts, addProduct, removeProduct } = useCart();
  const amount = cartProducts.filter(
    (cartProduct) => cartProduct === product._id
  ).length;
  const sumPrice = amount * product.price;

  if (amount === 0) {
    return null;
  }

  return (
    <tr>
      <td className={styles.productCell}>
        <div className={styles.imageBox}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={120}
            height={120}
          />
        </div>
        {product.title}
      </td>
      <td>
        <span className={styles.span}>
          <button
            onClick={() => removeProduct(product._id)}
            className="btn btn-default"
            type="button"
          >
            -
          </button>
        </span>
        {amount}
        <span className={styles.span}>
          <button
            onClick={() => addProduct(product._id)}
            className="btn btn-default"
            type="button"
          >
            +
          </button>
        </span>
      </td>
      <td>${sumPrice}</td>
    </tr>
  );
}
