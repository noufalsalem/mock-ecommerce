import React, { useState } from "react";
import { Product } from "@/context/types";
import AddToCartBtn from "../cart/AddToCartBtn";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickViewClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative group rounded-lg shadow-lg overflow-hidden">
      <div className="overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">SAR{product.price.toFixed(2)}</p>
      </div>

      <div className="flex justify-between absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white rounded-t-lg">
        <AddToCartBtn product={product} />
        <button onClick={handleQuickViewClick} className="py-2 px-4 rounded">
          Quick View
        </button>
      </div>

      {isModalOpen && <QuickViewModal product={product} onClose={closeModal} />}
    </div>
  );
};

const QuickViewModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-xl mb-4">{product.title}</h2>
        <img src={product.images[0]} alt={product.title} className="w-full h-40 object-cover mb-4" />
        <p className="mb-4">{product.description}</p>
        <p className="font-bold">SAR{product.price.toFixed(2)}</p>
        <AddToCartBtn product={product} />
        <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
