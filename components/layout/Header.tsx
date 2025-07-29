import styles from "@/components/layout/Header.module.scss";
import Link from "next/link";

import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/orders", label: "Orders" },
  { href: "/cart", label: "Cart" },
];

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className="center wrapper">
        <Link href={"/"} className={styles.logo}>
          Ecommerce
        </Link>
        {/* Навигация для десктопа */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} className={styles.navLink} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Навигация для мобильных (бургер) */}
        <div className={styles.mobileNav}>
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
