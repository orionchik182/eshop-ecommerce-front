import styles from "@/components/layout/Header.module.scss";
import Link from "next/link";
import CartLink from "../ui/CartLink";

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className="center wrapper">
        <Link href={"/"} className={styles.logo}>
          Ecommerce
        </Link>
        <nav className={styles.nav}>
          <Link href={"/"} className={styles.navLink}>
            Home
          </Link>
          <Link href={"/products"} className={styles.navLink}>
            All products
          </Link>
          <Link href={"/categories"} className={styles.navLink}>
            Categories
          </Link>
          <Link href={"/account"} className={styles.navLink}>
            Account
          </Link>
          <CartLink/>
        </nav>
      </div>
    </header>
  );
}
