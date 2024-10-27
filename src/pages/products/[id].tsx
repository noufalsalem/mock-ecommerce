import React from "react";
import { useRouter } from "next/router";
import { useProducts } from "@/context/ProductContext";
import AddToCartBtn from "@/components/cart/AddToCartBtn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <img src={product.images[0]} alt={product.title} className="w-full h-auto" />
        </div>
        <div className="flex-1">
          <p>SAR{product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <AddToCartBtn product={product} />
        </div>
      </div>

      <div className="flex justify-around mt-20">
        {prevProduct && (
          <button onClick={() => router.push(`/products/${prevProduct.id}`)} className="flex gap-4 bg-transparent text-[#CD865C]">
            <FaChevronLeft className="text-[#CD865C]" size={24} />
            <p> {prevProduct.title}</p>
          </button>
        )}
        {nextProduct && (
          <button onClick={() => router.push(`/products/${nextProduct.id}`)} className="flex gap-4 bg-transparent text-[#CD865C]">
            <p>{nextProduct.title}</p>
            <FaChevronRight className="text-[#CD865C]" size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
