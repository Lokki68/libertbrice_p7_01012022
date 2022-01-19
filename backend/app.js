const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const -> Routes

const app = express();

app.use(cors());
app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Exxess-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next(
  );
});

app.use(express.json())

// Routes


// Exports -> app
module.exports = app