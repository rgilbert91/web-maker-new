const express = require("express");
const router = express.Router();
const Page = require("../models/Page");

// Create websites /api/pages
router.post("/", async (req, res) => {
  const newPage = new Page({ ...req.body });
  const page = await newPage.save();
  res.json(newPage);
});

// Find all pages by wid
router.get("/websites/:wid", async (req, res) => {
  const wid = req.params.wid;
  currentPages = await Page.find({ websiteId: wid });
  res.json(currentPages);
});

// find page by page ID
router.get("/:pid", async (req, res) => {
  const pid = req.params.pid;
  page = await Page.findById(pid);
  res.json(page);
});

// update page
router.put("/", async (res, req) => {
  const newPage = req.body;
  await Page.findByIdAndUpdate(newPage._id, newPage);
  res.json(newPage);
});

// delete pages
router.delete("/:pid", async (req, res) => {
  const pid = req.params.pid;
  await Page.findByIdAndDelete(pid);
  res.json(null);
});

module.exports = router;
