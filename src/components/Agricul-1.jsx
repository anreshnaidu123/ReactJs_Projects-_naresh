import React from "react";
import "./card1.css"; // Ensure this CSS file exists and is properly linked.

const AgriculturePage = () => {
  return (
    <div>
      {/* Agriculture Intro Section */}
      <div className="agriculture-intro">
        <div className="agriculture-left">
          <div className="circle-image">
            <img
              src="./images/div.elementor-widget-container.png"
              alt="Farm"
              className="main-image"
            />
            <img
              src="./images/elements (1).png"
              alt="Person"
              className="overlay-image"
            />
          </div>
        </div>
        <div className="agriculture-right">
          <p className="intro-title">Our Introductions</p>
          <h1 className="main-heading">
            Agriculture & Organic <br /> Product Farm
          </h1>
          <h2 className="highlight-text">
            Agrios is the largest global organic farm.
          </h2>
          <p className="description">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected
            humor or random word which don’t look even.
          </p>
          <div className="features">
            <div className="feature">
              <span role="img" aria-label="Fruits">
                🍇
              </span>
              Growing fruits and vegetables
            </div>
            <div className="feature">
              <span role="img" aria-label="Tips">
                🧪
              </span>
              Tips for ripening your fruits
            </div>
          </div>
          <ul className="highlights">
            <li>✔️ Lorem Ipsum is not simply random text.</li>
            <li>✔️ Making this the first true generator on the internet.</li>
          </ul>
          <button className="discover-button">Discover More</button>
        </div>
      </div>

  
    </div>
  );
};

export default AgriculturePage;
