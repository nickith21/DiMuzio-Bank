const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://Nick:Poopis1@cluster0.7zt6a7k.mongodb.net/?retryWrites=true&w=majority";
let db = null;

// connect to mongo
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  console.log("Connected successfully to db server");

  // connect to myproject database
  db = client.db("myproject");
});

function updateMany() {
  return new Promise((resolve, reject) => {
    const movies = db.collection("users");
    const filter = {};
    const updateDoc = {
      $set: {
        admin: false,
      },
    };
    movies.updateMany(filter, updateDoc, function (err, result) {
      err ? reject(err) : resolve(result);
    });
  });
}

// id: 1 - mongodb - create user account
function create(name, email, password, id) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("users");
    const doc = { name, email, password, balance: 0, _id: id, admin: false };
    collection.insertOne(doc, { w: 1 }, function (err, result) {
      err ? reject(err) : resolve(doc);
    });
  });
}

// id: 1 - firestore - create user account
function createWithFS(name, email, password, id) {
  return new Promise((resolve, reject) => {
    const collection = fs.collection("users");
    const doc = { name, email, password, balance: 0, _id: id };
    collection
      .doc(id)
      .set(doc)
      .then(function (err, result) {
        err ? reject(err) : resolve(doc);
      });
  });
}

// id: 2 - find user account
function find(email) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({ email: email })
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

// find user account
function findOne(id) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOne({ _id: id })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err));
  });
}

// update - deposit/withdraw amount
function update(id, amount) {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .findOneAndUpdate(
        { _id: id },
        { $inc: { balance: amount } },
        { returnOriginal: false },
        function (err, documents) {
          err ? reject(err) : resolve(documents);
        }
      );
  });
}

// all users
function all() {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection("users")
      .find({})
      .toArray(function (err, docs) {
        err ? reject(err) : resolve(docs);
      });
  });
}

module.exports = { create, createWithFS, updateMany, findOne, find, update, all };
