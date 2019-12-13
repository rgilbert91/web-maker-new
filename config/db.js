const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongo");

const connectDB = async () => {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connectDB;
