import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Trending Today</h2>
      <img src="/images/trending.jpg" alt="Trending" className="sidebar-img" />
      <h2>Popular Categories</h2>
      <ul className="categories">
        <li>Fashion</li>
        <li>Home Decor</li>
        <li>Beauty</li>
        <li>Groceries</li>
      </ul>
      <h2>Blogs</h2>
      <div className="blog">
        <h3>Eco-friendly Living</h3>
        <p>10 tips for sustainable living...</p>
      </div>
    </aside>
  );
};

export default Sidebar;
