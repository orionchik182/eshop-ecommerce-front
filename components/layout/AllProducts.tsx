import styles from "@/components/layout/AllProducts.module.scss";
import { getProducts } from "@/lib/data-service";
import Product from "@/components/layout/Product";

export default async function AllProducts() {
  const allProducts = await getProducts();

  return (
    <div className="center">
      <h2 className={styles.h2}>All Products</h2>
      <div className={`${styles.grid}`}>
        {allProducts?.length > 0 &&
          allProducts.map((product) => (
            <Product
              key={String(product._id)}
              {...(product as unknown as ProductType)}
            />
          ))}
      </div>
    </div>
  );
}
