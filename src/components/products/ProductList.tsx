import React from "react";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-4">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto max-w-screen-xl px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
