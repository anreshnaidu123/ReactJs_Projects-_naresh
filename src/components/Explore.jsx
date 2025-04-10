import React from "react";

import "./Whatyou.css"; // Importing the CSS file

const Explore = () => {
  const products = [
    {
      id: 1,
      image: "./images/elements (3).png",
      title: "Agriculture Products",
   
    },
    {
      id: 2,
      image: "./images/elements (2).png",
      title: "Organic Products",
     
    },
    {
      id: 3,
      image: "./images/elements (4).png",
      title: "Fresh Vegetables",
      
    },
    // {
    //   id: 4,
    //   image: "./images/elements (5).png",
    //   title: "Dairy Products",
      
    // },
  ];

  return (
    <div>
    <div className="coin">
        <p>our services</p>
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

          </div>
        </div>
      ))}
    </div>
    </div>

    </div>
  );
};

export default Explore;
