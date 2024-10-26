import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartItem from "@/components/cart/CartItem";
import { useProducts } from "@/context/ProductContext";

const Cart = () => {
  const { products } = useProducts();

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <div className="mt-4">
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
