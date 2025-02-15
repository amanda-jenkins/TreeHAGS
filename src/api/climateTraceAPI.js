const axios = require('axios');

const BASE_URL = 'https://api.climatetrace.org/v6/assets/emissions';

/**
 * Fetch emissions data from Climate Trace API.
 * @param {string} country - 3-letter country code (ISO 3166-1 alpha-3).
 * @param {number} year - Year for emissions data (default: 2022).
 * @param {string} sector - (Optional) Filter by sector (e.g., 'power', 'transportation').
 * @param {number} limit - Number of results (default: 100).
 * @returns {Promise<Object>} - Emissions data.
 */
const fetchEmissionsData = async (country, year = 2022, sector = '', limit = 100) => {
  try {
    const params = { countries: country, year, limit };
    if (sector) params.sectors = sector;

    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching emissions data:', error);
    return null;
  }
};

module.exports = { fetchEmissionsData };
