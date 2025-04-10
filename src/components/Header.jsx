import React from "react";
import './header.css';

const Header = () => {
  return (
    <>
      <header className="bg-white py-5 px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./images/Header.png"alt="Agrios Logo"
            className="h-10 mr-2"
          />
          <div>
            <h1 className="text-xl font-semibold">Agrios</h1>
            <p className="text-sm">Agriculture Farming</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/Link - icon.png" alt="Twitter" />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/Link - icon (1).png" alt="Facebook" />
          </a>

          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/Link - icon (2).png" alt="Pinterest" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./images/Link - icon (3).png" alt="Instagram" />
          </a>

        </div>

        {/* Contact Information */}
        <div className="flex gap-5">
          {/* Phone */}
          <div className="flex items-center gap-2">
            <a href="#1" target="_blank">
              <img src="./images/Icon.png" alt="Phone" />
            </a>
            <div>
              <p>Call anytime</p>
              <p>+98 (000) - 9630</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <img style={{ width: '20px' }} src="./images/Icon (1).png" alt="Email" />
            <div>
              <p>Send email</p>
              <p className="font-medium">amber@agrios.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <a href="https://maps.app.goo.gl/CHu3hra4KBq8AGiv5" target="_blank" rel="noopener noreferrer">
              <img src="./images/Icon (2).png" alt="Location" />
              <p style={{ color: "black" }}> Marrimakulapalli(V), <br />Tadimarri(M), <br />Anathapuramu(D).
              </p>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
