import React, { useState } from 'react';
import emissionsData from '../data/emissionsData';
import CountryHint from './CountryHint';

const GameBoard = () => {
  const [input, setInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');
  const currentCountry = emissionsData[currentIndex];

  const handleGuess = () => {
    if (input.toLowerCase() === currentCountry.country.toLowerCase()) {
      setMessage(`Correct! It was ${currentCountry.country}`);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % emissionsData.length);
      setInput('');
    } else {
      setMessage('Incorrect. Try again.');
    }
  };

  return (
    <div className="game-board">
      <h2>Guess the Country Based on Emissions!</h2>
      <CountryHint hint={currentCountry.hint} />
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter country name"
      />
      <button onClick={handleGuess}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default GameBoard;
