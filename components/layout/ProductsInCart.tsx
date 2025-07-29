"use client";

import styles from "@/components/layout/ProductsInCart.module.scss";
import { useEffect, useState } from "react";
import { useCart } from "@/components/features/CartContext";
import InCartProduct from "./InCartProduct";
import addOrder from "@/lib/actions";

export default function ProductsInCart() {
  const { cartProducts } = useCart();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cartProducts.length > 0) {
      fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: cartProducts }),
      })
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setIsLoading(false);
        });
    } else {
      // Если корзина пуста, очищаем список продуктов
      setProducts([]);
      setIsLoading(false);
    }
  }, [cartProducts]);

  // Считаем общую стоимость
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isLoading) {
    return (
      <div className="center">
        <p>Loading cart...</p>
      </div>
    );
  }

  console.log(cartProducts);

  return (
    <div className="center">
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <h2 className="font-bold text-3xl mb-4">Cart</h2>
          {!products?.length ? (
            <div>Your cart is empty</div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <InCartProduct
                    product={product}
                    key={product._id.toString()}
                  />
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className={styles.total}>
                    <span>${total}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        {!!products?.length && (
          <div className={styles.box}>
            <div className={styles.infoBox}>
              <h2>Order information</h2>
              <form action={addOrder} className={styles.form}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
                <div className={styles.cityBox}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                  />
                  <input
                    className={styles.input}
                    type="number"
                    placeholder="Postal Code"
                    name="postalCode"
                    required
                  />
                </div>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Street Address"
                  name="streetAddress"
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Country"
                  name="country"
                  required
                />
                <input
                  type="hidden"
                  value={cartProducts.join(",")}
                  name="products"
                />
                <button className="btn btn-black">Continue to payment</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
