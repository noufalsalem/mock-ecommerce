import React from "react";
import styles from "@/styles/Header.module.css";
import CartList from "./CartList";

const CartDropdown = () => {
  return (
    <div className={styles.dropdown}>
      <CartList />
    </div>
  );
};

export default CartDropdown;
