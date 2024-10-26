import React from "react";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "../components/products/ProductCard";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
