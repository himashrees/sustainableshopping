import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaSearch, FaInfoCircle, FaUserAlt, FaHome, FaArrowUp } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [isTrendingVisible, setIsTrendingVisible] = useState(false); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]); // Default price range

  const baseURL = "https://www.example.com";  
  const history = useHistory();

  // Fetch products and check if the user is logged in
  useEffect(() => {
    fetch("http://localhost:8080/api/products/all")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setTrendingProducts(getTrendingProducts(data)); 
      })
      .catch((err) => console.error(err));

    fetch("/api/profile", { credentials: "include" })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setIsLoggedIn(false);
          return null;
        }
      })
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
          setUserProfile(data);
        }
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []); 

  const getTrendingProducts = (allProducts) => {
    const seed = new Date().toDateString();
    const randomizer = (str) => str
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const randomSeed = randomizer(seed);

    const shuffledProducts = [...allProducts]
      .sort(() => (Math.sin(randomSeed) - 0.5) * 2)
      .slice(0, 5); 

    return shuffledProducts;
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    alert(`${product.name} added to cart!`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    applyFilters(query, selectedCategory, selectedPriceRange);
  };

  // Filter function to combine search query, category, and price range
  const applyFilters = (query, category, priceRange) => {
    const filtered = products.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const description = product.description?.toLowerCase() || "";
      const categoryMatch = category ? description.includes(category.toLowerCase()) : true;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const nameMatch = name.includes(query) || description.includes(query);

      return nameMatch && categoryMatch && priceMatch;
    });
    setFilteredProducts(filtered);
  };

  // Handle category selection (this will filter based on keywords in the description)
  const handleCategoryChange = (event) => {
    const selected = event.target.value;
    setSelectedCategory(selected);
    applyFilters(searchQuery, selected, selectedPriceRange);
  };

  // Handle price range selection
  const handlePriceRangeChange = (event) => {
    const value = event.target.value.split(",").map(Number);
    setSelectedPriceRange(value);
    applyFilters(searchQuery, selectedCategory, value);
  };

  // Toggle visibility of the Trending section
  const toggleTrendingVisibility = () => {
    setIsTrendingVisible(!isTrendingVisible);
  };

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="site-title">Sustainable Shop</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome /> Home
          </Link>

          <Link to="/userprofile" className="nav-link">
            <FaUserAlt /> Profile
          </Link>

          <Link to="/cart" className="nav-link">
            <FaShoppingCart /> Cart ({cart.length})
          </Link>
        </div>
      </nav>

      {/* Filters */}
      <div className="filters">
        <div className="trending-toggle" onClick={toggleTrendingVisibility}>
          <FaArrowUp /> Trending Today
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <input
            type="text"
            placeholder="Search by category (e.g., Dress, Shirt)"
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Price Range Filter */}
        <div className="price-filter">
          <input
            type="range"
            min="0"
            max="10000"
            step="500"
            value={selectedPriceRange[1]}
            onChange={handlePriceRangeChange}
          />
          <span>₹{selectedPriceRange[0]} - ₹{selectedPriceRange[1]}</span>
        </div>
      </div>

      {/* Trending Today Section (conditionally visible) */}
      {isTrendingVisible && (
        <div className="trending-today">
          <h2>Trending Today</h2>
          <div className="product-grid">
            {trendingProducts.length > 0 ? (
              trendingProducts.map((product) => {
                const productURL = product.purchaseLink && product.purchaseLink.startsWith("http")
                  ? product.purchaseLink
                  : baseURL + (product.purchaseLink || '');

                return (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")
                      }
                    />
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-category">{product.category}</p>
                      <p className="eco-rating">Eco Rating: {product.rating}</p>
                      <p className="price">₹{product.price}</p>
                    </div>
                    <div className="product-actions">
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                      <a
                        href={productURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more-btn"
                      >
                        <FaInfoCircle /> Read More
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No trending products available</p>
            )}
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <div className="no-products-found">
            <h3>No results found!</h3>
            <p>Oops! It looks like we couldn’t find any products that match your search. Try again with different keywords!</p>
          </div>
        ) : (
          filteredProducts.map((product) => {
            const productURL = product.purchaseLink && product.purchaseLink.startsWith("http")
              ? product.purchaseLink
              : baseURL + (product.purchaseLink || '');

            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")
                  }
                />
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="eco-rating">Eco Rating: {product.rating}</p>
                  <p className="price">₹{product.price}</p>
                </div>
                <div className="product-actions">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <a
                    href={productURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more-btn"
                  >
                    <FaInfoCircle /> Read More
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Dashboard;
