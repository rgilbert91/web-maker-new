const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
//Code used for JWT
const auth = require("../middleware/auth");
//CODE BELOW FOR MONGO DB
const User = require("../models/User");
// Code used for BCrypt
const bcrypt = require("bcryptjs");

// Log In
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // check if user name is correct
  let user = await User.findOne({ username: username });
  if (!user) {
    res.json(null);
  } else {
    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch && password !== user.password) {
      res.json(null);
    }
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: "1d"
      },
      (error, token) => {
        if (error) {
          throw error;
        }
        res.json({ token, user });
      }
    );
  }
});

// Load User
router.get("/load", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
});

//  Find user by credentials ORIGINAL!!!!
router.get("/", async (req, res) => {
  // Get username and password
  const username = req.query.username;
  const password = req.query.password;
  let user = await User.findOne({ username: username });
  // if user is not existing
  if (!user) {
    user = null;
  }
  // send user back to client
  res.json(user);
});

// Create new user
router.post("/register", async (req, res) => {
  const newUser = new User({ ...req.body });
  // Create salt & hash
  bcrypt.genSalt(30, (err, salt) => {
    if (err) {
      throw err;
    }
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      newUser.password = hash;
    });
  });
  const user = await newUser.save();
  const payload = {
    user: {
      id: user.id
    }
  };
  jwt.sign(
    payload,
    config.get("secret"),
    {
      expiresIn: "1d"
    },
    (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ token, user });
    }
  );
});

// Find the use by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
});

// Update User
router.put("/", async (req, res) => {
  const newUser = req.body;
  await User.findByIdAndUpdate(newUser._id, newUser);
  res.json(newUser);
});

module.exports = router;

//
//
//
//
//
//
//
//
//NOT FINISHED AS OF YET.
// // FUNCTIONS USING MYSQL DATABASE
// // Finding user by credentials (MYSQL)
// router.get("/", async (req, res) =>){
// //Get username and password
//   const username = req.query.username;
//   const password = req.query.username;
//   let query;
//   // if username and password are sent from client
//   if (username && password) {
//     query = "SELECT * from users WHERE username=? AND password = ?";

//     // if the username is taken
//   } else if (username) {
//     query = "SELECT * FROM users WHERE username=?";
//   }
//   sql.query(query, [username, password], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.json(result);
//   });
// }
//NOT FINISHED AS OF YET.
//
//
//

//
//
//
//
//
