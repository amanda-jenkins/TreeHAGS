import React from 'react';

const CountryHint = ({ hint }) => {
  return (
    <div className="hint">
      <p><strong>Hint:</strong> {hint}</p>
    </div>
  );
}

export default CountryHint;
