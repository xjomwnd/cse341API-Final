const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;


const uri = 'DB_URI=mongodb+srv://finalproject:your_password_here@cluster0.hbwhk.mongodb.net/cse341-Final';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb
};
