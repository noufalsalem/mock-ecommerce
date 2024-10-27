import React, { useState } from "react";
import { Product } from "@/context/types";
import AddToCartBtn from "../cart/AddToCartBtn";
import Image from "next/image";
import { useRouter } from "next/router";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleQuickViewClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToProduct = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="relative group rounded-lg shadow-lg">
      <div className="cursor-pointer transition-transform duration-300 transform group-hover:scale-105" onClick={goToProduct}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p>SAR{product.price.toFixed(2)}</p>
      </div>

      <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-lg">
        <AddToCartBtn product={product} />
        <button onClick={handleQuickViewClick} className="py-2 px-4 rounded">
          Quick View
        </button>
      </div>

      {isModalOpen && <QuickViewModal product={product} onClose={closeModal} goToProduct={goToProduct} />}
    </div>
  );
};

const QuickViewModal: React.FC<{ product: Product; onClose: () => void; goToProduct: () => void }> = ({ product, onClose, goToProduct }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl mb-4">{product.title}</h2>
        <div onClick={goToProduct} className="cursor-pointer">
          <Image src={product.thumbnail} alt={product.title} width={400} height={300} className="object-cover transition-transform duration-300 transform hover:scale-110" layout="responsive" placeholder="blur" blurDataURL="../assets/product-fallback.png" />
        </div>
        <p className="mb-4">{product.description}</p>
        <p className="font-bold">SAR{product.price.toFixed(2)}</p>
        <AddToCartBtn product={product} />
        <button onClick={onClose} className="bg-red-500 py-2 px-4 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
