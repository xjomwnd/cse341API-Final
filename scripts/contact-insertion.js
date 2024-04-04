// Import required modules
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb+srv://finalproject:7Thayowaku77@cluster0.hbwhk.mongodb.net/cse341-Final', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Define contact schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String,
});

// Define Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Sample contact data
const contactsData = [
  {
    firstName: "Sarah",
    lastName: "Birch",
    email: "amazingwoman@test.com",
    favoriteColor: "Green",
    birthday: "12/12/20"
  },
  {
    firstName: "Jimmy",
    lastName: "Carter",
    email: "jCarter@test.com",
    favoriteColor: "Purple",
    birthday: "07/12/10"
  },
  {
    firstName: "Cassandra",
    lastName: "Anderson",
    email: "AndersonC@test.com",
    favoriteColor: "Yellow",
    birthday: "02/22/95"
  }
];

// Function to insert contact data
async function insertContacts() {
  try {
    // Insert contacts data into the database
    await Contact.insertMany(contactsData);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting contacts:', error);
  } finally {
    // Close database connection
    db.close();
  }
}

// Call the function to insert contact data
insertContacts();
