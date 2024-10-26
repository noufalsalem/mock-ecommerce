import { useState, useEffect } from "react";
import { Product } from "@/context/types";
import AddToCartBtn from "@/components/cart/AddToCartBtn";
import { useProducts } from "@/context/ProductContext";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import fallbackImage from "@/assets/product-fallback.png";

export default function Home() {
  const { products } = useProducts();
  const [carouselProducts, setCarouselProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastProducts = products.slice(-14);
    setCarouselProducts(lastProducts.slice(0, 4));
  }, [products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % 14);
      setCarouselProducts(products.slice(-14).slice(currentIndex, currentIndex + 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [products, currentIndex]);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to My Store</h1>
      <p className="text-center text-gray-600 mb-8">Discover our latest products below.</p>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carouselProducts.map((product) => (
            <div key={product.id} className={`relative rounded-lg shadow-lg p-4 ${styles.productCard}`}>
              <div className={`overflow-hidden rounded-lg ${styles.imageWrapper}`}>
                <Image src={product.thumbnail || fallbackImage} alt={product.title} width={400} height={300} className="object-cover transition-transform duration-300 transform hover:scale-110" layout="responsive" placeholder="blur" blurDataURL="../assets/product-fallback.png" />
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <AddToCartBtn product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
