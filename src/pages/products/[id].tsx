import React from "react";
import { useRouter } from "next/router";
import { useProducts } from "@/context/ProductContext";
import ProductCard from "@/components/products/ProductCard"; // For next/prev product display
import { Product } from "@/context/types";
import AddToCartBtn from "@/components/cart/AddToCartBtn";

const ProductDetail = () => {
  const router = useRouter();
  const { products } = useProducts();
  const { id } = router.query;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <div>Loading...</div>;

  const currentIndex = products.findIndex((p) => p.id === product.id);
  const prevProduct = products[currentIndex - 1];
  const nextProduct = products[currentIndex + 1];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <img src={product.images[0]} alt={product.title} className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <p className="text-gray-700">SAR{product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <AddToCartBtn product={product} />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        {prevProduct && <button onClick={() => router.push(`/products/${prevProduct.id}`)}>Previous: {prevProduct.title}</button>}
        {nextProduct && <button onClick={() => router.push(`/products/${nextProduct.id}`)}>Next: {nextProduct.title}</button>}
      </div>
    </div>
  );
};

export default ProductDetail;
