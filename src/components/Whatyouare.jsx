import React from "react";
import "./Whatyou.css"; // Importing the CSS file

const ProductCards = () => {
  const products = [
    {
      id: 1,
      image: "./images/div.elementor-column.png",
      title: "Agriculture Products",
      icon: "🚜",
    },
    {
      id: 2,
      image: "./images/images.png",
      title: "Organic Products",
      icon: "🌱",
    },
    {
      id: 3,
      image: "./images/section.png",
      title: "Fresh Vegetables",
      icon: "🥬",
    },
    // {
    //   id: 4,
    //   image: "./images/section (1).png",
    //   title: "Dairy Products",
    //   icon: "🧀",
    // },
  ];

  return (
    <div>
    <div className="coin">
        <p>our services</p>
        <h3>What We Offer</h3>
        <div className="product-cards-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-info">
            <span className="product-icon">{product.icon}</span>
            <h3 className="product-title">{product.title}</h3>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
    </div>

    </div>
  );
};

export default ProductCards;
