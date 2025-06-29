const express = require('express');
const helmet = require('helmet');

const app = express();
const api = require('./server.js');

// Use helmet to set secure HTTP headers
app.use(helmet());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Mount your API routes under /_api
app.use('/_api', api);

// Serve index.html on root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Useful Programmer Info Security App started on port ${port}`);
});

// Export the app (if needed for testing or external use)
module.exports = app;
