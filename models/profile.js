// profile.js

const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const profileRouter = require('./profile'); 

// Define the route handler for the /profile route
router.get('/', ensureLoggedIn, (req, res) => {
  res.send(`Hello, ${req.user.displayName}`);
});

module.exports = router;
