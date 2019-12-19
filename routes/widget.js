const express = require("express");
const router = express.Router();
const Widget = require("../models/Widget");

// Create new widget
router.post("/", async (req, res) => {
  const newWidget = new Widget({ ...req.body });
  const widget = await newWidget.save();
  res.json(widget);
});

// Find all widgets for page
router.get("/page/:pid", async (req, res) => {
  const pid = req.params.pid;
  const currentWidgets = await Widget.find({ pageId: pid });
  res.json(currentWidgets);
});

// Find widget by ID
router.get("/:wgid", async (req, res) => {
  const wgid = req.params.wgid;
  const widget = await Widget.findById(wgid);
  res.json(widget);
});

// update widget
router.put("/", async (req, res) => {
  const newWidget = req.body;
  await Widget.findByIdAndUpdate(newWidget._id, newWidget);
  res.json(newWidget);
});

// Delete Widgets
router.delete("/:wgid", async (req, res) => {
  const wgid = req.params.wgid;
  await Widget.findByIdAndDelete(wgid);
  res.json(null);
});

module.exports = router;
