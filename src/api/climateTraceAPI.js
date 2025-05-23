import axios from 'axios';
import OpenAI from "openai";

const BASE_URL = 'https://api.climatetrace.org/v6';

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, 
  });

  
/**
 * Fetch emissions data from Climate Trace API.
 * @param {string} country      - 3-letter country code (ISO 3166-1 alpha-3).
 * @param {string} sector       - Filter by sector (e.g., 'power', 'transportation').
 * @param {number} limit        - Number of results.
 * @returns {Promise<Object>}   - Emissions data.
 */
export const fetchEmissionsData = async (country, sector = '', limit = 100) => {
    try {
      const params = { countries: country, limit };
      if (sector) params.sectors = sector;
  
      const response = await axios.get(`${BASE_URL}/country/emissions`, { params });
  
      console.log("API Response for", country, ":", response.data);
  
      return response.data;
    } catch (error) {
      console.error('Error fetching emissions data:', error);
      return null;
    }
  };  
  
const countryCodeMap = {
  "Netherlands Antilles": "ANT",
  "Serbia and Montenegro": "SCG",
  "Aruba": "ABW",
  "Afghanistan": "AFG",
  "Angola": "AGO",
  "Anguilla": "AIA",
  "Åland Islands": "ALA",
  "Albania": "ALB",
  "Andorra": "AND",
  "United Arab Emirates": "ARE",
  "Argentina": "ARG",
  "Armenia": "ARM",
  "American Samoa": "ASM",
  "Antarctica": "ATA",
  "French Southern Territories": "ATF",
  "Antigua and Barbuda": "ATG",
  "Australia": "AUS",
  "Austria": "AUT",
  "Azerbaijan": "AZE",
  "Burundi": "BDI",
  "Belgium": "BEL",
  "Benin": "BEN",
  "Bonaire, Sint Eustatius and Saba": "BES",
  "Burkina Faso": "BFA",
  "Bangladesh": "BGD",
  "Bulgaria": "BGR",
  "Bahrain": "BHR",
  "Bahamas": "BHS",
  "Bosnia and Herzegovina": "BIH",
  "Saint Barthélemy": "BLM",
  "Belarus": "BLR",
  "Belize": "BLZ",
  "Bermuda": "BMU",
  "Bolivia (Plurinational State of)": "BOL",
  "Brazil": "BRA",
  "Barbados": "BRB",
  "Brunei Darussalam": "BRN",
  "Bhutan": "BTN",
  "Bouvet Island": "BVT",
  "Botswana": "BWA",
  "Central African Republic": "CAF",
  "Canada": "CAN",
  "Cocos (Keeling) Islands": "CCK",
  "Switzerland": "CHE",
  "Chile": "CHL",
  "China": "CHN",
  "Côte d'Ivoire": "CIV",
  "Cameroon": "CMR",
  "Democratic Republic of the Congo": "COD",
  "Congo": "COG",
  "Cook Islands": "COK",
  "Colombia": "COL",
  "Comoros": "COM",
  "Cabo Verde": "CPV",
  "Costa Rica": "CRI",
  "Cuba": "CUB",
  "Curaçao": "CUW",
  "Christmas Island": "CXR",
  "Cayman Islands": "CYM",
  "Cyprus": "CYP",
  "Czechia": "CZE",
  "Germany": "DEU",
  "Djibouti": "DJI",
  "Dominica": "DMA",
  "Denmark": "DNK",
  "Dominican Republic": "DOM",
  "Algeria": "DZA",
  "Ecuador": "ECU",
  "Egypt": "EGY",
  "Eritrea": "ERI",
  "Western Sahara": "ESH",
  "Spain": "ESP",
  "Estonia": "EST",
  "Ethiopia": "ETH",
  "Finland": "FIN",
  "Fiji": "FJI",
  "Falkland Islands (Malvinas)": "FLK",
  "France": "FRA",
  "Faroe Islands": "FRO",
  "Micronesia (Federated States of)": "FSM",
  "Gabon": "GAB",
  "United Kingdom of Great Britain and Northern Ireland": "GBR",
  "Georgia": "GEO",
  "Guernsey": "GGY",
  "Ghana": "GHA",
  "Gibraltar": "GIB",
  "Guinea": "GIN",
  "Guadeloupe": "GLP",
  "Gambia": "GMB",
  "Guinea-Bissau": "GNB",
  "Equatorial Guinea": "GNQ",
  "Greece": "GRC",
  "Grenada": "GRD",
  "Greenland": "GRL",
  "Guatemala": "GTM",
  "French Guiana": "GUF",
  "Guam": "GUM",
  "Guyana": "GUY",
  "China, Hong Kong Special Administrative Region": "HKG",
  "Heard Island and McDonald Islands": "HMD",
  "Honduras": "HND",
  "Croatia": "HRV",
  "Haiti": "HTI",
  "Hungary": "HUN",
  "Indonesia": "IDN",
  "Isle of Man": "IMN",
  "India": "IND",
  "British Indian Ocean Territory": "IOT",
  "Ireland": "IRL",
  "Iran (Islamic Republic of)": "IRN",
  "Iraq": "IRQ",
  "Iceland": "ISL",
  "Israel": "ISR",
  "Italy": "ITA",
  "Jamaica": "JAM",
  "Jersey": "JEY",
  "Jordan": "JOR",
  "Japan": "JPN",
  "Kazakhstan": "KAZ",
  "Kenya": "KEN",
  "Kyrgyzstan": "KGZ",
  "Cambodia": "KHM",
  "Kiribati": "KIR",
  "Saint Kitts and Nevis": "KNA",
  "Republic of Korea": "KOR",
  "Kosovo": "XKX",
  "Kuwait": "KWT",
  "Lao People's Democratic Republic": "LAO",
  "Lebanon": "LBN",
  "Liberia": "LBR",
  "Libya": "LBY",
  "Saint Lucia": "LCA",
  "Liechtenstein": "LIE",
  "Sri Lanka": "LKA",
  "Lesotho": "LSO",
  "Lithuania": "LTU",
  "Luxembourg": "LUX",
  "Latvia": "LVA",
  "China, Macao Special Administrative Region": "MAC",
  "Saint Martin (French Part)": "MAF",
  "Morocco": "MAR",
  "Monaco": "MCO",
  "Republic of Moldova": "MDA",
  "Madagascar": "MDG",
  "Maldives": "MDV",
  "Mexico": "MEX",
  "Marshall Islands": "MHL",
  "The former Yugoslav Republic of Macedonia": "MKD",
  "Mali": "MLI",
  "Malta": "MLT",
  "Myanmar": "MMR",
  "Montenegro": "MNE",
  "Mongolia": "MNG",
  "Northern Mariana Islands": "MNP",
  "Mozambique": "MOZ",
  "Mauritania": "MRT",
  "Montserrat": "MSR",
  "Martinique": "MTQ",
  "Mauritius": "MUS",
  "Malawi": "MWI",
  "Malaysia": "MYS",
  "Mayotte": "MYT",
  "Namibia": "NAM",
  "New Caledonia": "NCL",
  "Niger": "NER",
  "Norfolk Island": "NFK",
  "Nigeria": "NGA",
  "Nicaragua": "NIC",
  "Niue": "NIU",
  "Netherlands": "NLD",
  "Norway": "NOR",
  "Nepal": "NPL",
  "Nauru": "NRU",
  "New Zealand": "NZL",
  "Oman": "OMN",
  "Pakistan": "PAK",
  "Panama": "PAN",
  "Pitcairn": "PCN",
  "Peru": "PER",
  "Philippines": "PHL",
  "Palau": "PLW",
  "Papua New Guinea": "PNG",
  "Poland": "POL",
  "Puerto Rico": "PRI",
  "Democratic People's Republic of Korea": "PRK",
  "Portugal": "PRT",
  "Paraguay": "PRY",
  "State of Palestine": "PSE",
  "French Polynesia": "PYF",
  "Qatar": "QAT",
  "Réunion": "REU",
  "Romania": "ROU",
  "Russian Federation": "RUS",
  "Rwanda": "RWA",
  "Saudi Arabia": "SAU",
  "Sudan": "SDN",
  "Senegal": "SEN",
  "Singapore": "SGP",
  "South Georgia and the South Sandwich Islands": "SGS",
  "Saint Helena": "SHN",
  "Svalbard and Jan Mayen Islands": "SJM",
  "Solomon Islands": "SLB",
  "Sierra Leone": "SLE",
  "El Salvador": "SLV",
  "San Marino": "SMR",
  "Somalia": "SOM",
  "Saint Pierre and Miquelon": "SPM",
  "Serbia": "SRB",
  "South Sudan": "SSD",
  "Sao Tome and Principe": "STP",
  "Suriname": "SUR",
  "Slovakia": "SVK",
  "Slovenia": "SVN",
  "Sweden": "SWE",
  "Eswatini": "SWZ",
  "Sint Maarten (Dutch part)": "SXM",
  "Seychelles": "SYC",
  "Syrian Arab Republic": "SYR",
  "Turks and Caicos Islands": "TCA",
  "Chad": "TCD",
  "Togo": "TGO",
  "Thailand": "THA",
  "Tajikistan": "TJK",
  "Tokelau": "TKL",
  "Turkmenistan": "TKM",
  "Timor-Leste": "TLS",
  "Tonga": "TON",
  "Trinidad and Tobago": "TTO",
  "Tunisia": "TUN",
  "Turkey": "TUR",
  "Tuvalu": "TUV",
  "Taiwan": "TWN",
  "United Republic of Tanzania": "TZA",
  "Uganda": "UGA",
  "Ukraine": "UKR",
  "United States Minor Outlying Islands": "UMI",
  "Uruguay": "URY",
  "United States of America": "USA",
  "Uzbekistan": "UZB",
  "Holy See": "VAT",
  "Saint Vincent and the Grenadines": "VCT",
  "Venezuela (Bolivarian Republic of)": "VEN",
  "British Virgin Islands": "VGB",
  "United States Virgin Islands": "VIR",
  "Viet Nam": "VNM",
  "Vanuatu": "VUT",
  "Wallis and Futuna Islands": "WLF",
  "Samoa": "WSM",
  "Yemen": "YEM",
  "South Africa": "ZAF",
  "Zambia": "ZMB",
  "Zimbabwe": "ZWE"
};

/**
 * Get the country code from the hardcoded mapping.
 * @param {string} countryName - The country name.
 * @returns {string|null} - The corresponding 3-letter country code or null.
 */
export const getCountryCode = (countryName) => {
    return countryCodeMap[countryName] || null;
  };

/**
 * Fetch a hint for the randomly selected country using OpenAI.
 * @param {string} countryName  - The country name.
 * @returns {Promise<string>}   - A hint describing the country.
 */
export const fetchCountryHint = async (countryName) => {
    try {
      console.log(`Fetching hint for: ${countryName}`);
  
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are an AI assistant providing hints about countries without revealing their names." },
          { role: "user", content: `Give me a unique but non-obvious fact about ${countryName}, without directly naming it.` },
        ],
        max_tokens: 50,
      });
  
      const hint = response.choices[0]?.message?.content?.trim();
      console.log("Received hint:", hint);
      return hint || "Hint unavailable.";
    } catch (error) {
      console.error("Error fetching country hint:", error);
      return "Hint unavailable.";
    }
  };
  