const express = require("express");
const router = express.Router();

const pages = [
  { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
  { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
  { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" },
  { _id: "544", name: "Post 3", websiteId: "123", title: "Lorem" }
];

// Create websites /api/pages
router.post("/", (req, res) => {
  const newPage = req.body;
  pages.push(newPage);
  res.json(newPage);
});

// Find all pages by wid
router.get("/websites/:wid", (req, res) => {
  const wid = req.params.wid;
  const currentPages = [];
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].websiteId === wid) {
      currentPages.push(pages[i]);
    }
  }
  res.json(currentPages);
});

// find page by page ID
router.get("/:pid", (req, res) => {
  const pid = req.params.pid;
  let page = null;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i]._id === pid) {
      page = pages[i];
    }
  }
  res.json(page);
});

// update page
router.put("/", (res, req) => {
  const newPg = req.body;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i]._id === newPg._id) {
      pages[i] = newPg;
    }
  }
  res.json(newPg);
});

// delete pages
router.delete("/:pid", (req, res) => {
  const pid = req.params.pid;
  for (let i = 0; i < pages.length; i++) {
    if (pages[i]._id === pid) {
      pages.splice(i, 1);
    }
  }
  res.json(pages);
});

module.exports = router;
