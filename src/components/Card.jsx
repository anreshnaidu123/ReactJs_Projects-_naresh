import React from 'react';
import './card.css';

const Card = () => {
  return (
    <div>
      <section className="product-cards-container">
        {/* Card 1 */}
        <div className="Card">
          <img src="./images/container.png" alt="Feature AI" className="Card-image" />
          <h3>Feature AI</h3>
          <h2>We're using a new technology</h2>
        </div>

        {/* Card 2 */}
        <div className="Card">
          <img src="./images/container (1).png" alt="Feature BI" className="Card-image" />
          <h3>Feature BI</h3>
          <h2>We're using a new technology</h2>
        </div>

        {/* Card 3 */}
        <div className="Card">
          <img src="./images/container (2).png" alt="Feature CI" className="Card-image" />
          <h3>Feature CI</h3>
          <h2>We're using a new technology</h2>
        </div>
      </section>
    </div>
  );
};

export default Card;
