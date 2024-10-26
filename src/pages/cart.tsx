import React from "react";
import { useCart } from "@/context/CartContext";
import CartList from "@/components/cart/CartList";

const CartPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <CartList />
    </div>
  );
};

export default CartPage;
