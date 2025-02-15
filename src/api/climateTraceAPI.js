const axios = require('axios');

const BASE_URL = 'https://api.climatetrace.org/v6';

/**
 * Fetch emissions data from Climate Trace API.
 * @param {string} country      - 3-letter country code (ISO 3166-1 alpha-3).
 * @param {number} year         - Year for emissions data.
 * @param {string} sector       - Filter by sector (e.g., 'power', 'transportation').
 * @param {number} limit        - Number of results.
 * @returns {Promise<Object>}   - Emissions data.
 */
const fetchEmissionsData = async (country, sector = '', limit = 100) => {
    try {
      const params = { countries: country, limit };
      if (sector) params.sectors = sector;  // Only add sector if provided
  
      const response = await axios.get(`${BASE_URL}/country/emissions`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching emissions data:', error);
      return null;
    }
  };
  

module.exports = { fetchEmissionsData };
