const mongoose = require('mongoose');

// Database connection URI
const DB_URI = 'mongodb+srv://finalproject:<password>@cluster0.hbwhk.mongodb.net/'; 
// Change this URI to match your MongoDB connection string

// Connect to MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for Mongoose connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Gracefully close MongoDB connection when Node.js process terminates
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err.message);
    process.exit(1);
  }
});

module.exports = db;
