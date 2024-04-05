const dotenv = require('dotenv');
dotenv.config();

const { MongoClient } = require('mongodb');

let _db;

const initDb = async () => {
  // Add logging to check loaded environment variables
  console.log('Loaded environment variables:', process.env);

  try {
    if (_db) {
      console.log('Db is already initialized!');
      return _db;
    }
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    _db = client.db(); // Access the database from the client
    console.log('Connected to MongoDB');
    return _db;
  } catch (err) {
    console.error('Error initializing database:', err);
    throw err; // Propagate the error to the caller
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

// Close database connection gracefully
const closeDb = () => {
  if (_db) {
    _db.close();
    _db = null;
    console.log('Database connection closed');
  }
};

module.exports = {
  initDb,
  getDb,
  closeDb
};
