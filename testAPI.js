const { fetchEmissionsData } = require("./src/api/climateTraceAPI");

async function testAPI() {
  const data = await fetchEmissionsData("USA", 2022); // Test for USA emissions in 2022
  console.log("Emissions Data:", data);
}

testAPI();
