// import express library
const express = require("express");

// init express
const app = express();

// create a server listening at localhost:3100
app.listen(3100, () => {
  console.log("Server started on port 3100");
});
