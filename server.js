// import express library
const express = require("express");
// importing path to be used on heroku
const path = require("path");

// init express
const app = express();

app.use(express.json());

// define routes
app.use("/api/user", require("./routes/user"));
app.use("/api/website", require("./routes/websites"));
app.use("/api/page", require("./routes/page"));
app.use("/api/widget", require("./routes/widget"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Import db.is into server.js to connect to database
const connectDB = require("./config/db");

// Connect DB
connectDB();
