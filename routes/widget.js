const express = require("express");
const router = express.Router();

const widgets = [
  {
    _id: "123",
    widgetType: "HEADING",
    pageId: "321",
    size: "2",
    text: "GIZMODO"
  },
  {
    _id: "234",
    widgetType: "HEADING",
    pageId: "321",
    size: "4",
    text: "Lorem ipsum"
  },
  {
    _id: "345",
    widgetType: "IMAGE",
    pageId: "321",
    width: "100%",
    url:
      "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  {
    _id: "567",
    widgetType: "HEADING",
    pageId: "321",
    size: "4",
    text: "Lorem ipsum"
  },
  {
    _id: "678",
    widgetType: "YOUTUBE",
    pageId: "321",
    width: "100%",
    url: "https://www.youtube.com/embed/X1JjPS40a-E"
  }
];
// Create new widget
router.post("/", (req, res) => {
  const newWidget = req.body;
  widgets.push(newWidget);
  res.json(newWidget);
});

// Find all widgets for page
router.get("/page/:pid", (req, res) => {
  const pid = req.params.pid;
  const currentWidgets = [];
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i].pageId === pid) {
      currentWidgets.push(widgets[i]);
    }
  }
  res.json(currentWidgets);
});

// Find widget by ID
router.get("/:wgid", (req, res) => {
  const wgid = req.params.wgid;
  let widget = null;
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i]._id === wgid) {
      widget === widgets[i];
    }
  }
  res.json(widget);
});

// update widget
router.put("/", (req, res) => {
  const newWg = req.body;
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i]._id === newWg._id) {
      widgets[i] = newWg;
    }
  }
  res.json(newWg);
});

// Delete Widgets
router.delete("/:wgid", (req, res) => {
  const wgid = req.params.wgid;
  for (let i = 0; i, widgets.length; i++) {
    widgets.splice(i, 1);
  }
});

module.exports = router;
