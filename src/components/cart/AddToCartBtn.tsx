import React from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/types";

interface AddToCartBtnProps {
  product: Product;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <button onClick={handleAddToCart} className="py-2 px-4 rounded">
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
