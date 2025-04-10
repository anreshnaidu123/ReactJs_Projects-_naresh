import React from 'react';
import './farm.css'; // Link your CSS file

function FarmBenefits() {
  return (
    <div className="farm-benefits-container">
      {/* Left Section */}
      <div className="farm-benefits-left">
        <img
          src="./images/elements (6).png"
          alt="Farm"
          className="farm-image"
        />
        {/* <div className="tag">
          <span>Agriculture</span>
          <br />
          <span>Professional</span>
          <br />
          <span>Leader</span>
        </div> */}
      </div>

      {/* Right Section */}
      <div className="farm-benefits-right">
        <h3>Our Farm Benefits</h3>
        <h1>Why Choose Agrios Market</h1>
        <p>
          There are many variations of passages available, but the majority
          have suffered alteration in some form by injected humor or random
          words which don't look even.
        </p>

        {/* Benefits List */}
        <ul className="benefits-list">
          <li>
            <span className="icon green">&#10004;</span>
            <div>
              <h2>Quality Organic Food</h2>
              <p>There are variations you need to be sure there is anything hidden in the middle of text.</p>
            </div>
          </li>
          <li>
            <span className="icon green">&#10004;</span>
            <div>
              <h2>Professional Farmers</h2>
              <p>There are variations you need to be sure there is anything hidden in the middle of text.</p>
            </div>
          </li>
          <li>
            <span className="icon yellow">&#10004;</span>
            <div>
              <h2>Quality Products</h2>
              <p>There are variations you need to be sure there is anything hidden in the middle of text.</p>
            </div>
          </li>
        </ul>

        <button className="green-button">Discover More</button>
      </div>
    </div>
  );
}

export default FarmBenefits;
