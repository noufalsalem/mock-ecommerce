import React from "react";
import { useCart } from "@/context/CartContext";

const CartList = () => {
  const { cart } = useCart();

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="flex justify-between items-center">
              <img src={product.thumbnail} width={50} height={10} />
              {product.title} - SAR{product.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartList;
