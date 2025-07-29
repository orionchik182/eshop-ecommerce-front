import styles from "@/components/layout/NewProducts.module.scss";
import { getNewProducts } from "@/lib/data-service";
import Product from "@/components/layout/Product";
export default async function NewProducts() {
  const newProducts = await getNewProducts();

  return (
    <div className="center">
      <h2 className={styles.h2}>New Arrivals</h2>
      <div className={`${styles.grid}`}>
        {newProducts?.length > 0 &&
          newProducts.map((product) => (
            <Product
              key={String(product._id)}
              {...(product as unknown as ProductType)}
            />
          ))}
      </div>
    </div>
  );
}
