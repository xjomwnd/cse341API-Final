/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');
const session = require('express-session');
const sessionMiddleware = require('./express-sessions');



dotenv.config();

const app = express(); // Define app here

// Assuming express-session.js is in the same directory

// Use the session middleware in your application
app.use(sessionMiddleware);

// Assuming protectedRoutes.js is in the routes directory
const protectedRoutes = require('./routes/protectedRoutes'); 

// Add logging to check loaded environment variables
console.log('Loaded environment variables:', process.env);

const port = process.env.PORT || 8083;

// Mount the protectedRoutes for the /profile route
app.use('/', protectedRoutes);

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
