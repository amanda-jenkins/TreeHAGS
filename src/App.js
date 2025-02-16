import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchEmissionsData, getCountryCode } from "./api/climateTraceAPI";
import { countries } from "./data/countries";

const axios = require('axios').default;
console.log("Axios in App.js:", axios);


function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("Fetching question...");
  const [correctCountry, setCorrectCountry] = useState("Loading...");

  useEffect(() => {
    generateNewQuestion();
  }, []);

  const generateNewQuestion = async () => {
    if (!countries || countries.length === 0) {
      console.error("Country list is empty or not loaded.");
      setQuestion("Error loading country list.");
      setCorrectCountry("Error");
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[randomIndex] || "Unknown";
    const countryCode = getCountryCode(randomCountry);
  
    if (!countryCode) {
      setQuestion("Failed to fetch country data.");
      setCorrectCountry("Unknown");
      return;
    }
  
    const emissionsData = await fetchEmissionsData(countryCode);
    console.log("Fetched emissions data:", emissionsData); // ✅ Debugging data
  
    if (!emissionsData || emissionsData.length === 0) {
      setQuestion("No emissions data available for this country.");
      setCorrectCountry(randomCountry);
      return;
    }
  
    const randomSector = emissionsData[Math.floor(Math.random() * emissionsData.length)];
    console.log("Random sector data:", randomSector); // ✅ Debugging sector
  
    // ✅ Check if randomSector and its properties exist before using them
    if (!randomSector || !randomSector.Emissions || !randomSector.gas || !randomSector.sector) {
      setQuestion("No valid emissions data available.");
      setCorrectCountry(randomCountry);
      return;
    }
  
    setCorrectCountry(randomCountry);
    setQuestion(`Which country emitted ${randomSector.Emissions.toLocaleString()} metric tons of ${randomSector.gas} from the ${randomSector.sector.replace(/-/g, " ")} sector?`);
  };
  


  const handleGuess = () => {
    if (selectedCountry.toLowerCase() === correctCountry.toLowerCase()) {
      setMessage("Correct! Well done!");
      setScore(score + 1);
      generateNewQuestion();
    } else {
      setMessage("Sorry, that's not correct. Try again!");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>GHGdle - Guess the Country by Emissions</h1>
          <p>Test your knowledge! Can you guess the country based on its greenhouse gas emissions?</p>
        </div>
      </header>

      <div className="game-container">
        <div className="card">
          <h2>🌍 Guess the Country</h2>
          <p>{question}</p>
          <select
            className="country-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {Array.isArray(countries) && countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <button className="guess-btn" onClick={handleGuess}>Submit Guess</button>
          {message && <p className="message">{message}</p>}
          <p>Score: {score}</p>
          <p>Correct Answer: {correctCountry}</p>
        </div>
      </div>

      <footer className="footer">
        <p>🌱 Built with love for climate awareness and a greener future! 🌱</p>
      </footer>
    </div>
  );
}

export default App;
