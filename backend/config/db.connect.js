const mongoose = require("mongoose");

const connectDB = mongoose.connect(
  "mongodb+srv://user_sri:Sri00739@cluster0.bggnnvl.mongodb.net/loseit?retryWrites=true&w=majority"
);

module.exports = connectDB;