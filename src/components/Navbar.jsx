import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Only import Link
import './Navbar.css'; // Optional styling

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
  setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
    <div className="navbar-left">

      {/* naresh naidu ammmieni */}
       <ul className="navbar-menu">
         <li className="menu-item" onClick={toggleDropdown}>
           Home <span className="dropdown-arrow">▼</span>
           {dropdownOpen && (
             <ul className="dropdown-menu">
               <li>
                 <Link to="/home1">Home1</Link>
               </li>
               <li>
                 <Link to="/home2">Home2</Link>
               </li>
               <li>
                 <Link to="/home3">Home3</Link>
               </li>
               <li>
                 <Link to="/home">Home</Link>
               </li>
             </ul>
           )}
         </li>
         <li className="menu-item">About</li>
         
         <li className="menu-item">Services</li>

         <li className="menu-item">Projects</li>

         <li className="menu-item">News</li>

         <li className="menu-item">Shop</li>

         <li className="menu-item">Contact</li>
       </ul>

       </div>
       <div className="navbar-right">
      <div className="navbar-icons">
   <span className="icon search-icon" onClick={() => setDropdownOpen(!dropdownOpen)}>🔍</span>
   {dropdownOpen && (
     <div className="search-label">
       <input type="text" placeholder="Search here..." />
     </div>
   )}
   <div className="cart-icon-container">
     🛒
     <span className="cart-count">0</span>
   </div>

 </div>
</div>


   </nav>
  );
}

export default Navbar;
