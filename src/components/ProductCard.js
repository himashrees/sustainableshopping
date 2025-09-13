import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <a href={product.purchaseLink} target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
