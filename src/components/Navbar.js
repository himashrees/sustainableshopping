import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Root & Rise</h1>
      <input
        type="text"
        placeholder="Search eco-friendly products..."
        className="search-input"
      />
    </nav>
  );
};

export default Navbar;
