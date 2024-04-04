// Inserting data from the provided JSON into MongoDB collections

// Connect to MongoDB server
// Make sure MongoDB is running and accessible
// Use appropriate connection string and database name
// eslint-disable-next-line no-undef
var conn = new Mongo();
var db = conn.getDB("finalproject");

// Insert contacts data into the contacts collection
db.contacts.insertMany([
  {
    "firstName": "Sarah",
    "lastName": "Birch",
    "email": "amazingwoman@test.com",
    "favoriteColor": "Green",
    "birthday": "12/12/20"
  },
  {
    "firstName": "Jimmy",
    "lastName": "Carter",
    "email": "jCarter@test.com",
    "favoriteColor": "Purple",
    "birthday": "07/12/10"
  },
  {
    "firstName": "Cassandra",
    "lastName": "Anderson",
    "email": "AndersonC@test.com",
    "favoriteColor": "Yellow",
    "birthday": "02/22/95"
  }
]);

// eslint-disable-next-line no-undef
print("Data inserted successfully.");

// Assuming this is your MongoDB connection setup code
const mongoose = require('mongoose');

// Accessing the DB_URI environment variable
const dbURI = process.env.DB_URI;

// Connecting to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Additional code after successful connection
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));
