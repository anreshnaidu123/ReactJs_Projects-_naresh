import React from 'react';
import './Testimonial.css'; // Link your CSS file

function Testimonial() {
  return (
    <div className="testimonial-container">
      {/* Left Section */}
      <div className="testimonial-left">
        <h3>Our Testimonials</h3>
        <h1>
          What They're <br />
          Talking About <br />
          Agrios
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form by injected humor
          or random words that don't look even.
        </p>
        <button className="green-button">View All Testimonials</button>
      </div>

      {/* Right Section */}
      <div className="testimonial-right">
        <div className="arrows">
          {/* <img src="/images/up-arrow.png" alt="Up Arrow" className="arrow" />
          <img src="/images/down-arrow.png" alt="Down Arrow" className="arrow" /> */}
        </div>
        <div className="review-box">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected humor
            or random words that don't look even.
          </p>
          <h2>Bonnie Tolbert</h2>
          <img src="./images/div.avatar-wrap.png" alt="" />
          <span>★★★★★</span>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
