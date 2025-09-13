// import React from "react";
// import { FaChartPie, FaLeaf, FaGlobe } from "react-icons/fa";
// import "./AboutPage.css";

// function AboutPage() {
//   return (
//     <div className="about-page">
//       <h1>About Us</h1>

//       {/* Vision and Mission */}
//       <section className="vision-mission">
//         <div className="vision">
//           <FaGlobe className="icon" />
//           <h2>Our Vision</h2>
//           <p>To create a sustainable future by promoting eco-friendly practices and spreading awareness globally.</p>
//         </div>
//         <div className="mission">
//           <FaLeaf className="icon" />
//           <h2>Our Mission</h2>
//           <p>Empowering individuals and communities to make sustainable choices through actionable insights and resources.</p>
//         </div>
//       </section>

//       {/* Why Sustainability */}
//       <section className="why-sustainability">
//         <h2>Why Sustainability Matters</h2>
//         <p>
//           Sustainability is critical to preserving natural resources for future generations. It promotes a balance
//           between economic growth, environmental care, and social well-being.
//         </p>
//         <img
//           src="https://sigmaearth.com/wp-content/uploads/2022/09/10-reasons-why-sustainability-is-more-important-th.jpeg"
//           alt="Why Sustainability"
//           className="sustainability-image"
//         />
//       </section>

//       {/* Impacts */}
//       <section className="impacts">
//         <h2>Impacts of Sustainability</h2>
//         <div className="impact-graphs">
//           <div className="graph">
//             <FaChartPie className="icon" />
//             <h3>Reduced Carbon Footprint</h3>
//             <p>Adopting sustainable practices reduces greenhouse gas emissions significantly.</p>
//           </div>
//           <div className="graph">
//             <FaLeaf className="icon" />
//             <h3>Improved Biodiversity</h3>
//             <p>Sustainable practices protect natural habitats and improve biodiversity.</p>
//           </div>
//           <div className="graph">
//             <FaGlobe className="icon" />
//             <h3>Better Quality of Life</h3>
//             <p>Encouraging sustainability ensures cleaner air, water, and a healthier lifestyle.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutPage;
import React from "react";
import { FaLeaf, FaChartPie, FaGlobe } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      {/* Logo Section */}
      <div className="about-logo">
        <FaLeaf className="logo-icon" />
        <h1 className="logo-title">Root & Rise</h1>
      </div>
      <p className="logo-subtitle">Growing Sustainability Together</p>

      {/* Vision and Mission */}
      <section className="vision-mission">
        <div className="vision">
          <FaGlobe className="icon" />
          <h2>Our Vision</h2>
          <p>To create a sustainable future by promoting eco-friendly practices and spreading awareness globally.</p>
        </div>
        <div className="mission">
          <FaLeaf className="icon" />
          <h2>Our Mission</h2>
          <p>Empowering individuals and communities to make sustainable choices through actionable insights and resources.</p>
        </div>
      </section>

      {/* Why Sustainability */}
      <section className="why-sustainability">
        <h2>Why Sustainability Matters</h2>
        <p>
          Sustainability is critical to preserving natural resources for future generations. It promotes a balance
          between economic growth, environmental care, and social well-being.
        </p>
        <img
          src="https://sigmaearth.com/wp-content/uploads/2022/09/10-reasons-why-sustainability-is-more-important-th.jpeg"
          alt="Why Sustainability"
          className="sustainability-image"
        />
      </section>

      {/* Impacts */}
      <section className="impacts">
        <h2>Impacts of Sustainability</h2>
        <div className="impact-graphs">
          <div className="graph">
            <FaChartPie className="icon" />
            <h3>Reduced Carbon Footprint</h3>
            <p>Adopting sustainable practices reduces greenhouse gas emissions significantly.</p>
          </div>
          <div className="graph">
            <FaLeaf className="icon" />
            <h3>Improved Biodiversity</h3>
            <p>Sustainable practices protect natural habitats and improve biodiversity.</p>
          </div>
          <div className="graph">
            <FaGlobe className="icon" />
            <h3>Better Quality of Life</h3>
            <p>Encouraging sustainability ensures cleaner air, water, and a healthier lifestyle.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
