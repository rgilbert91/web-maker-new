const express = require("express");
const router = express.Router();

const websites = [
  { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
  { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
  { _id: "456", name: "Msimbo", developerId: "456", description: "Lorem" },
  { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
  { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
  { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
  { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
];

// create websites /api/webistes.
router.post("/", (req, res) => {
  const newWebsite = req.body;
  websites.push(newWebsite);
  res.json(newWebsite);
});

// Find all websites by given user id
router.get("/user/:uid", (req, res) => {
  const uid = req.params.uid;
  const currentWebsites = [];
  for (let i = 0; i < websites.length; i++) {
    if (websites[i].developerId === uid) {
      currentWebsites.push(websites[i]);
    }
  }
  res.json(currentWebsites);
});

// Find website by ID
router.get("/:wid", (req, res) => {
  const wid = req.params.wid;
  let website = null;
  for (let i = 0; i < websites.length; i++) {
    if (websites[i]._id === wid) {
      website = websites[i];
    }
  }
  res.json(website);
});

// update website
router.put("/", (req, res) => {
  const newWeb = req.body;
  for (let i = 0; i < websites.length; i++) {
    if (websites[i]._id === newWeb._id) {
      websites[i] = newWeb;
    }
  }
  res.json(newWeb);
});

// Delete website
router.delete("/:wid", (req, res) => {
  const wid = req.params.wid;
  for (let i = 0; i < websites.length; i++) {
    websites.splice(i, 1);
  }
});

module.exports = router;