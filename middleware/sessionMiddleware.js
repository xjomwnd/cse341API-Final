const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Create a new MongoDBStore instance
const store = new MongoDBStore({
  uri: 'mongodb+srv://finalproject:7Thayowaku77@cluster0.hbwhk.mongodb.net/cse341-Fina',
  collection: 'sessions'
});

// Error handling for MongoDBStore
store.on('error', function(error) {
  console.error('Session store error:', error);
});

// Session middleware configuration
const sessionMiddleware = session({
  secret: 'your_secret_here', // Provide a secret key
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
});

module.exports = sessionMiddleware;
