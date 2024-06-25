// server.js
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, SpreadTech Africa!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});