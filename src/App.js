"use client"

import React, { useState } from "react";
import "./App.css";

// List of all countries (you might want to move this to a separate file)
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
  "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Holy See", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
  "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman",
  "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar",
  "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
  "Vanuatu", "Venezuela", "Vietnam",
  "Yemen",
  "Zambia", "Zimbabwe"
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  // Function to create falling leaves
  const createLeaves = () => {
    const leaves = [];
    for (let i = 0; i < 10; i++) {
      leaves.push(
        <div
          key={i}
          className="leaf"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      );
    }
    return leaves;
  };

  // Function to handle guess submission
  const handleGuess = () => {
    // This is a placeholder. In a real game, you'd check against the correct answer.
    if (selectedCountry.toLowerCase() === "france") {
      setMessage("Correct! Well done!");
      setScore(score + 1);
    } else {
      setMessage("Sorry, that's not correct. Try again!");
    }
  };

  return (
    <div className="container">
      {createLeaves()}
      <header className="header">
        <div className="header-content">
          <h1>
            <span className="earth-icon"></span>
            GHGdle - Guess the Country by Emissions
            <span className="earth-icon"></span>
          </h1>
          <p>Test your knowledge! Can you guess the country based on its greenhouse gas emissions?</p>
        </div>
      </header>

      <div className="game-container">
        <div className="card">
          <h2>🌍 Guess the Country</h2>
          <p>Hint?</p>
          <select
            className="country-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button className="guess-btn" onClick={handleGuess}>
            Submit Guess
          </button>
          {message && <p className="message">{message}</p>}
          <p>Score: {score}</p>
        </div>
      </div>

      <footer className="footer">
        <p>🌱 Built with love for climate awareness and a greener future! 🌱</p>
      </footer>
    </div>
  );
}

export default App;

