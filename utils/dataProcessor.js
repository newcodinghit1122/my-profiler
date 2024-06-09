const fs = require('fs');
const path = require('path');

const calculateStats = (data) => {
  const numbers = data.split('\n').map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const stdDev = Math.sqrt(numbers.map(x => Math.pow(x - avg, 2)).reduce((a, b) => a + b) / numbers.length);
  return { min, max, avg, standardDeviation: stdDev };
};

const processFile = async (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return calculateStats(data);
};

module.exports = { processFile };
