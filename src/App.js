import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchEmissionsData, getCountryCode, fetchCountryHint } from "./api/climateTraceAPI";
import { countries } from "./data/countries";
const sortedCountries = [...countries].sort();


function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState("Fetching question...");
  const [hint, setHint] = useState("");
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
    console.log(randomCountry)
  
    if (!countryCode) {
      setQuestion("Failed to fetch country data.");
      setCorrectCountry("Unknown");
      return;
    }
  
    const emissionsData = await fetchEmissionsData(countryCode);
    console.log(`Fetched emissions data for ${randomCountry} (${countryCode}):`, emissionsData);
  
    if (!emissionsData || emissionsData.length === 0) {
      console.warn(`No emissions data available for ${randomCountry} (${countryCode}).`);
      setQuestion("No emissions data available for this country.");
      setCorrectCountry(randomCountry);
      return;
    }
  
    const countryEmissions = emissionsData[0];
    console.log("Country emissions data:", countryEmissions);
  
    // Select a random gas type (CO2, CH4, N2O) from Climate Trace API
    const gases = Object.keys(countryEmissions.emissions || {});
    if (gases.length === 0) {
      console.warn(`No valid gas emissions data for ${randomCountry}.`);
      setQuestion("No valid emissions data available.");
      setCorrectCountry(randomCountry);
      return;
    }
  
    const randomGas = gases[Math.floor(Math.random() * gases.length)];
    const emissionValue = countryEmissions.emissions[randomGas];
  
    if (!emissionValue) {
      console.warn(`No emissions value for ${randomGas} in ${randomCountry}.`);
      setQuestion("No valid emissions data available.");
      setCorrectCountry(randomCountry);
      return;
    }
  
    setCorrectCountry(randomCountry);
    setQuestion(`Which country emitted ${emissionValue.toLocaleString()} metric tons of ${randomGas.toUpperCase()}?`);
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

  const handleHint = async () => {
    const hintResponse = await fetchCountryHint(correctCountry);
    setHint(hintResponse);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1> GHGuessr - Guess the Country by Emissions</h1>
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
            {Array.isArray(sortedCountries) && sortedCountries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
          <button className="guess-btn" onClick={handleGuess}>Submit Guess</button>
          {/* <button className="hint-btn" onClick={handleHint}>Get a Hint</button> */}

          {hint && <p className="hint">Hint: {hint}</p>}
          {message && <p className="message">{message}</p>}
          {/* <p className="score">Score: {score}</p> */}
          <div className="hint-container">
            <button className="hint-btn" onClick={handleHint}>Get a Hint</button>
          </div>

          <p className="score-text">Score: {score}</p>

          {/* <p>Correct Answer: {correctCountry}</p> */}
        </div>
      </div>

      <footer className="footer">
        <p>🌱 Built with love for climate awareness and a greener future! 🌱</p>
      </footer>
    </div>
  );
}

export default App;
