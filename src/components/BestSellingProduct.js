import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import '../bestSelling.css';

const bestSellingProducts = [
  {
    id: 1,
    name: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: "/img/hat.jpg",
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 65,
    image: "/img/sweat.jpg",
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 5,
    reviews: 65,
    image: "/img/phone.jpg",
  },
  {
    id: 4,
    name: "Small BookShelf",
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 65,
    image: "/img/gloves.jpg",
  },
];

const BestSelling = () => {
  return (
    <div className="best-selling-section">
      <div className="section-header">
        <div>
          <span className="tag">This Month</span>
          <h2 className="title">Best Selling Products</h2>
        </div>
        <div className="view-all-container">
            <button className="view-all">View All</button>
        </div>
      </div>
      <div className="product-grid">
        {bestSellingProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="card-icons">
                <FaHeart className="icon heart" />
                <FaEye className="icon eye" />
              </div>
            </div>
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                ${product.price}{" "}
                {product.originalPrice && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
              </p>
              <p className="product-rating">
                {[...Array(product.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
                <span className="review-count"> ({product.reviews})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
