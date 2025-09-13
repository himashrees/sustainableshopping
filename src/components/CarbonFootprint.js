import React, { useState } from "react";
import "./CarbonFt.css"; // Add any custom styles if needed

function CarbonFootprintTracker() {
  const [distance, setDistance] = useState(""); // Distance traveled by car (in km)
  const [electricity, setElectricity] = useState(""); // Electricity consumption (in kWh)
  const [result, setResult] = useState(null); // Result of the carbon footprint calculation
  const [showExplanation, setShowExplanation] = useState(false); // To toggle explanation visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Constants for carbon footprint calculation
    const carEmissionRate = 0.2; // 0.2 kg of CO2 per km for an average car
    const electricityEmissionRate = 0.475; // 0.475 kg of CO2 per kWh for an average electricity source

    // Calculating the carbon footprint
    const carCarbonFootprint = distance * carEmissionRate;
    const electricityCarbonFootprint = electricity * electricityEmissionRate;

    // Total carbon footprint
    const totalCarbonFootprint = carCarbonFootprint + electricityCarbonFootprint;

    setResult(totalCarbonFootprint); // Display the result
  };

  const handleShowExplanation = () => {
    setShowExplanation(!showExplanation); // Toggle the explanation section
  };

  return (
    <div className="carbon-tracker">
      <h1>Carbon Footprint Tracker</h1>
      <form onSubmit={handleSubmit} className="tracker-form">
        <div className="form-group">
          <label htmlFor="distance">Distance Traveled by Car (km):</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance in kilometers"
          />
        </div>
        <div className="form-group">
          <label htmlFor="electricity">Electricity Consumption (kWh):</label>
          <input
            type="number"
            id="electricity"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            placeholder="Enter electricity in kWh"
          />
        </div>
        <button type="submit" className="calculate-button">
          Calculate Carbon Footprint
        </button>
      </form>

      {result !== null && (
        <div className="result">
          <h2>Your Total Carbon Footprint:</h2>
          <p>{result.toFixed(2)} kg of CO2</p>
          <p>
            This is the amount of CO2 your activities contribute to the environment. Here's what you can do to reduce it:
          </p>
          <ul>
            <li>Consider using public transport or carpooling to reduce emissions from driving.</li>
            <li>Switch to renewable energy sources for your electricity consumption.</li>
            <li>Reduce your overall energy usage by being mindful of your appliances and heating/cooling systems.</li>
          </ul>
          <button onClick={handleShowExplanation} className="explanation-link">
            How does this relate to sustainable shopping? 
          </button>
          {showExplanation && (
            <div className="explanation-section">
              <h3>How Your Carbon Footprint Relates to Sustainable Shopping</h3>
              <p>
                Your carbon footprint is a measure of how your actions, such as transportation and energy use, contribute to climate change. 
                By reducing your carbon footprint, you can play a major role in combating climate change.
              </p>
              <p>
                At Root & Rise, we help you reduce your footprint with our sustainable shopping guide. 
                By choosing eco-friendly products and supporting brands that prioritize sustainability, 
                you contribute to a cleaner, greener planet.
              </p>
              <h4>Watch this video to learn more:</h4>
              <iframe
                src="https://www.youtube.com/embed/djpRUafjx7c?autoplay=1" // Example video URL
                title="Understanding Carbon Footprints"
                className="video"
                width="660"  // Set the width
                height="415" // Set the height
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CarbonFootprintTracker;
