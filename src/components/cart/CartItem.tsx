import { Product } from "@/context/types";

interface CartItemProps {
  product: Product;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{product.title}</span>
      <span>SAR{product.price.toFixed(2)}</span>
    </div>
  );
};

export default CartItem;
