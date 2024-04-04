// express-sessions.js

const express = require('express');
const session = require('express-session'); // Correct import statement
// eslint-disable-next-line no-unused-vars
const validateComment = require('./validateComment');

// Create a new Express application
const app = express();

// Set up express-session middleware
app.use(session({
  secret: 'your-secret-key', // Change this to your secret key
  resave: false,
  saveUninitialized: false
}));

// Export the configured session middleware
module.exports = app;
