import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaInfoCircle, FaPhoneAlt, FaSignInAlt, FaUserPlus, FaGlobe } from "react-icons/fa"; // Changed icon to FaGlobe
import Quiz from "./Quiz"; // Import the Quiz component
import "./HomePage.css";

function HomePage() {
  const mediaItems = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/5bVDpmzMICE", // Sustainable lifestyle
    },
    {
      type: "image",
      src: "https://media.istockphoto.com/id/1328853722/photo/over-the-shoulder-view-of-young-asian-woman-doing-home-delivery-grocery-shopping-online-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=tuppJ4hUtIXvo8ovlbkb6zarIoqITkda0z1X4geZ-uU=",
    },
    {
      type: "image",
      src: "https://media.istockphoto.com/id/1428749606/photo/circular-economy-concept-wooden-cubes-with-a-circular-economy-icon-on-a-green-background.jpg?s=612x612&w=0&k=20&c=6p0NBFP3ZhfCLOEJF3o_jeCLNKRR2_vq-J4cPBk3QlI=",
    },
    {
      type: "image",
      src: "https://media.istockphoto.com/id/1422209464/photo/recycling-products-concept-organic-cotton-recycled-cloth-zero-waste-materials-environment.jpg?s=612x612&w=0&k=20&c=KMnzL6GWuvaRW4dyIGD5WL3A9NwiExIbe1V7llBhFPo=",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/Djo_5rFrx-Y", // Zero-waste living
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1726235812628-23558521686f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/BnwdpR_2idA", // Recycling tips
    },
    {
      type: "image",
      src: "https://brownliving.in/cdn/shop/collections/Care_1400x.jpg?v=1720076157",
    },
    {
      type: "image",
      src: "https://media.istockphoto.com/id/121260897/photo/asian-market-of-bamboo-crafts.webp?a=1&b=1&s=612x612&w=0&k=20&c=uWjkpTtFe0O_Zq8-k1Aay_bv5JAVS9aqA-9zjgdPwdw=",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/egyNJ7xPyoQ", // Composting basics
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showImpactDetails, setShowImpactDetails] = useState(false);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const startQuizHandler = () => {
    setShowQuiz(true); // Display the quiz when the button is clicked
  };

  const handleReadMore = () => {
    setShowImpactDetails(true);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-links">
          <Link to="/home" className="nav-link">
            <FaShoppingCart /> Products
          </Link>
          <Link to="/about" className="nav-link">
            <FaInfoCircle /> About
          </Link>
          <Link to="/contact" className="nav-link">
            <FaPhoneAlt /> Contact
          </Link>
          <Link to="/carbon" className="nav-link"> {/* Updated link */}
            <FaGlobe /> Carbon Footprint Tracker {/* Updated icon */}
          </Link>
        </div>
        <div className="auth-icons">
          <Link to="/login" className="auth-icon">
            <FaSignInAlt title="Login" /> Login
          </Link>
          <Link to="/register" className="auth-icon">
            <FaUserPlus title="Register" /> Register
          </Link>
        </div>
      </div>

      {/* Media Slider Section */}
      <div className="slider">
        <div className="slide-container">
          {mediaItems[activeSlide].type === "image" ? (
            <img
              src={mediaItems[activeSlide].src}
              alt="Sustainability"
              className="slide-media"
            />
          ) : (
            <iframe
              src={mediaItems[activeSlide].src}
              title="Sustainability Video"
              className="slide-media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="dots">
          {mediaItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeSlide ? "active" : ""}`}
              onClick={() => handleSlideClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Add Quiz Section */}
      <div className="quiz-prompt">
        <h2>Let's have a short Quiz time!</h2>
        <p>Test your knowledge on sustainability with our fun quiz.</p>
        <button className="start-quiz-button" onClick={startQuizHandler}>
          Start Quiz
        </button>
      </div>

      {/* Quiz Component with Slide Effect */}
      {showQuiz && <Quiz />}

      <div className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <img 
              src="https://media4.giphy.com/media/BrTWsu6M0CLzcVJQSY/giphy.webp?cid=790b7611u8sc74soujqi9dwxaz52bcjm4h56xbu657wu0pr2&ep=v1_gifs_search&rid=giphy.webp&ct=g" 
              alt="Plastic Waste" 
              className="impact-icon" 
            />
            <h3>284,405</h3>
            <p>Kgs Plastic Saved</p>
          </div>
          <div className="impact-card">
            <img 
              src="https://media1.giphy.com/media/CIw85evwtVVaHHMjo4/200.webp?cid=790b7611zd1v8py3lkx1wh2ie6ybv6kv1hh420hl7gliqqdn&ep=v1_gifs_search&rid=200.webp&ct=g" 
              alt="CO2 Offset" 
              className="impact-icon" 
            />
            <h3>588,000</h3>
            <p>CO² Kgs Offset/Year</p>
          </div>
          <div className="impact-card">
            <img 
              src="https://media4.giphy.com/media/MBs9M9YaCGsbVPat6O/giphy.webp?cid=790b7611q21no29qxlyeghiannlz3gjzvix26i3jhkszh335&ep=v1_gifs_search&rid=giphy.webp&ct=g" 
              alt="Trees Planted" 
              className="impact-icon" 
            />
            <h3>29,400</h3>
            <p>Trees Planted</p>
          </div>
        </div>

        {!showImpactDetails ? (
          <button onClick={handleReadMore} className="read-more-link">
            Read More →
          </button>
        ) : (
          <div className="impact-details">
            <h3>Our Impact in Detail</h3>
            <p>By embracing plastic-free and carbon-neutral shopping practices, we are working towards a greener, more sustainable future for everyone. Our initiatives help reduce waste and create employment opportunities in rural areas.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;


