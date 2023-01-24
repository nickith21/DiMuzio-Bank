var express = require("express");
var app = express();
var cors = require("cors");
var dal = require("./dal.js");
const e = require("express");
const admin = require("./admin");

// used to serve static files from public directory
app.use(express.static("public"));
app.use(cors());

// unauthenticated route
app.get("/unauthenticatedRoute", (req, res) => {
  res.send("Unauthenticated route!");
});

//authenticated route
app.get("/authenticatedRoute", (req, res) => {
  // read the authorization header from the request that is being sent by the client
  const idToken = req.headers.authorization;
  const name = req.headers.name
  console.log("header:", idToken);
  console.log("name:",name)
  // verify the token by decoding it
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(function (decodedToken) {
      console.log("decodedToken:", decodedToken);
      res.send("Authentication success");
    })
    .catch(function (error) {
      console.log("error:", error);
      res.send("Authentication failed");
    });
});

// id: 1 + 2 - create user account
app.get("/account/create/:name/:email/:password/:id", function (req, res) {
  // check if account exists
  dal.find(req.params.email).then((users) => {
    // if user exists, return error message
    if (users.length > 0) {
      console.log("User already in exists");
      res.send("User already in exists");
    } else {
      // else create user
      dal
        .create(req.params.name, req.params.email, req.params.password, req.params.id)
        .then((user) => {
          console.log(user);
          res.send(user);
        });
    }
  });
});

// id: 1 + 2 - firestore - create user account
app.get("/account/create-with-firestore/:name/:email/:password/:id", function (req, res) {
    dal
      .createWithFS(req.params.name, req.params.email, req.params.password, req.params.id)
      .then((user) => {
        console.log(user);
        res.send(user);
      });
});

// login user
app.get("/account/login/:email/:password", function (req, res) {
  dal.find(req.params.email).then((user) => {
    // if user exists, check password
    if (user.length > 0) {
      if (user[0].password === req.params.password) {
        res.send(user[0]);
      } else {
        res.send("Login failed: wrong password");
      }
    } else {
      res.send("Login failed: user not found");
    }
  });
});

// find user account
app.get("/account/find/:email", function (req, res) {
  dal.find(req.params.email).then((user) => {
    console.log(user);
    res.send(user);
  });
});

// find one user by id - alternative to find
// connects to balance.js
app.get("/account/findOne/:id", function (req, res) {
  dal.findOne(req.params.id).then((user) => {
    console.log(user);
    res.send(user);
  });
});

// update all users with admin attribute
app.get("/account/updateMany", function (req, res) {
  dal.updateMany().then((response) => {
    console.log(response);
  });
});

// update - deposit/withdraw amount
app.get("/account/update/:id/:amount", function (req, res) {
  var amount = Number(req.params.amount);

  dal.update(req.params.id, amount).then((response) => {
    console.log(response);
    res.send(response);
  });
});

// all accounts
app.get("/account/all", function (req, res) {
  dal.all().then((docs) => {
    console.log(docs);
    res.send(docs);
  });
});

var port = 3000;
app.listen(port);
console.log("Running on port: " + port);
