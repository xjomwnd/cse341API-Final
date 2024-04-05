/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db/mongoose'); // Import mongoose.js for database connection

const app = require('./app');
const PORT = process.env.PORT || 8083;


// Middleware
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Social Media Aggregator API');
});

// Example route for handling social media data
app.post('/socialmedia', async (req, res) => {
  try {
    // Here you can handle incoming social media data and save it to the database using Mongoose
    res.status(200).json({ message: 'Social media data received and saved successfully' });
  } catch (error) {
    console.error('Error saving social media data:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
