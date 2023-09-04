const express = require('express');
const app = express();
const port = 9000; // You can use any available port

// Serve the mock data
app.get('/api/patterns', (req, res) => {
  const mockData = require('/mocks/patterns.json');
  res.json(mockData.patterns);
});

// Start the server
app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`);
});
