const express = require("express");
const router = express.Router();
const Website = require("../models/Website");

// create websites /api/webistes.
router.post("/", async (req, res) => {
  const newWebsite = new Website({ ...req.body });
  const website = await newWebsite.save();
  res.json(website);
});

// Find all websites by given user id
router.get("/user/:uid", async (req, res) => {
  const uid = req.params.uid;
  const currentWebsites = await Website.find({ developerId: uid });
  res.json(currentWebsites);
});

// Find website by ID
router.get("/:wid", async (req, res) => {
  const wid = req.params.wid;
  let website = await Website.findById(wid);
  res.json(website);
});

// update website
router.put("/", async (req, res) => {
  const newWebsite = req.body;
  await Website.findByIdAndUpdate(newWebsite._id, newWebsite);
  res.json(newWebsite);
});

// Delete website
router.delete("/:wid", async (req, res) => {
  const wid = req.params.wid;
  await Website.findByIdAndRemove(wid);
  res.json("Website Deleted");
});

module.exports = router;
