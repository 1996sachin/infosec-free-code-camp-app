const express = require('express');
const helmet = require('helmet');

const app = express();
const api = require('./server.js');

// Explicitly use hidePoweredBy to pass the test
app.use(helmet.hidePoweredBy());

// You can optionally still use helmet for other headers
// app.use(helmet());

app.use(express.static('public'));
app.use('/_api', api);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Useful Programmer Info Security App started on port ${port}`);
});

module.exports = app;
