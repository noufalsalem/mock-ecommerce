import React, { useState } from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import { routes } from "@/utils/routes";
import CartDropdown from "@/components/cart/CartDropdown";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cart } = useCart();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <nav className="flex items-center space-x-6">
          {routes.map((route) => (
            <a key={route.path} href={route.path} className={styles.headerItem}>
              {route.label}
            </a>
          ))}
        </nav>

        <div className="flex-grow flex items-center justify-center">
          <p className={styles.headerItem}>NOUFHS</p>
        </div>

        <div className="flex items-center space-x-4 relative">
          <div className="flex items-center relative">
            <FaShoppingCart className={styles.headerItem} onMouseEnter={toggleCartVisibility} onMouseLeave={toggleCartVisibility} />
            <span className={styles.cartIcon}>{cart.length ?? 0}</span>
            {cartVisible && <CartDropdown />} {/* Use your new component here */}
          </div>
          <FaUserCircle className={styles.headerItem} />
        </div>
      </div>
    </header>
  );
};

export default Header;
