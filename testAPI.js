const { fetchEmissionsData } = require("./src/api/climateTraceAPI");

async function testAPI() {
  const data = await fetchEmissionsData("USA");
  console.log("Emissions Data:", data);
}

testAPI();
