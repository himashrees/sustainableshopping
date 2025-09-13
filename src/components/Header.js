import React from "react";
import { FaRegBell, FaLeaf } from "react-icons/fa"; 
import "./Header.css"// Icon for announcement and leaf

function Header() {
  return (
    <header className="header">
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span className="announcement-text">
         <center> 🌱 Sustainability is our priority! Join us in making a difference.</center>
        </span>
        <FaRegBell className="announcement-icon" />
      </div>

      {/* Logo with Leaf Icon */}
      <div className="logo">
        <FaLeaf className="leaf-icon" />
        <h1>Root & Rise</h1>
      </div>
    </header>
  );
}

export default Header;
