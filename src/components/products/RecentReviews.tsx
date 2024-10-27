import React, { useState } from "react";
import { useProducts } from "@/context/ProductContext";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import styles from "@/styles/Home.module.css";

const RecentReviews: React.FC = () => {
  const { products } = useProducts();
  const recentReviews = products
    .flatMap((product) => product.reviews.map((review) => ({ ...review, productTitle: product.title })))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recentReviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recentReviews.length) % recentReviews.length);
  };

  return (
    <div className={`${styles.review} flex flex-col items-center p-8 mt-8 gap-4`}>
      <h6 className="mb-4 font-semibold">Recent Reviews</h6>
      <h1 className="text-2xl">Positive Feedback</h1>
      <FaQuoteRight size={24} />
      <div className="flex justify-between items-center">
        <button onClick={prevReview} className="flex items-center justify-center bg-transparent p-0">
          <FaChevronLeft size={24} className="text-[#CD865C]" />{" "}
        </button>
        <div>
          {recentReviews.map((review, index) => (
            <div key={index} className={`transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0 absolute"}`}>
              <div className="p-6">
                <h3 className="font-semibold text-xl">{review.reviewerName}</h3>
                <p>{review.comment}</p>
                <p className="text-sm">
                  Rating: {review.rating} | Date: {new Date(review.date).toLocaleDateString()}
                </p>
                <p className="text-sm">Product: {review.productTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextReview} className="flex items-center justify-center bg-transparent p-0">
          <FaChevronRight size={24} className="text-[#CD865C]" />{" "}
        </button>
      </div>
    </div>
  );
};

export default RecentReviews;
