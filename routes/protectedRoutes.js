// protectedRoutes.js
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();

// Define the route handler for the /profile route
module.exports = function (app) {
  router.get('/profile', ensureLoggedIn, (req, res) => {
    res.send(`Hello, ${req.user.displayName}`);
  });

  return router;
};
