/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
dotenv.config();

// Add logging to check loaded environment variables
console.log('Loaded environment variables:', process.env);

const port = process.env.PORT || 8083;
const app = express();

// Mount the profileRouter for the /profile route
app.use('/profile', profileRouter);

app.use(bodyParser.json());

// Middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Routes
app.use('/', require('./routes'));

// Error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

async function startServer() {
  try {
    await mongodb.initDb();
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1); // Exit with non-zero code to indicate failure
  }
}

startServer();
