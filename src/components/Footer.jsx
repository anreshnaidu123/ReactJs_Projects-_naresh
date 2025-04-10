import React from 'react';
import './Footer.css'; // Import the CSS file for styling
// Replace with the path to your logo image

const Footer = ( {date}) => {
  const year = new Date().toDateString();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div >
          <div className="footer-logo"><img src="./images/Header.png" alt="Agrios Logo" className="logo" /></div>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <div className="social-icons">
            <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src="./images/Link - icon.png" alt="" />
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src="./images/Link - icon (1).png" alt="" />
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src="./images/Link - icon (2).png" alt="" />
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#!" target="_blank" rel="noopener noreferrer">
                <img src="./images/Link - icon (3).png" alt="" />
              <i className="fab fa-instagram"></i>
            </a>
          </div>
           <div className="flex gap-4">
     </div>
        </div>

        {/* Explore Links */}
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li><a href="#!">About</a></li>
            <li><a href="#!">Services</a></li>
            <li><a href="#!">Our Projects</a></li>
            <li><a href="#!">Meet the Farmers</a></li>
            <li><a href="#!">Latest News</a></li>
            <li><a href="#!">Contact</a></li>
          </ul>
        </div>

        {/* News Section */}
        <div className="footer-news">
          <h3>News</h3>
          <div>
            <h4>Bringing Food Production Back To Cities</h4>
            <span>{year}</span>
          </div>
          <div>
            <h4>The Future of Farming, Smart Irrigation Solutions</h4>
            <span>{year}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i> 666 888 0000
            </li>
            <li>
              <i className="fas fa-envelope"></i> needhelp@company.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 80 Brooklyn Golden Street Line, New York, USA
            </li>
          </ul>
          <form>
            <input type="email "placeholder="Your Email Address"required/>
            <button>Submit</button>

          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
