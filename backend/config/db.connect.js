const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = mongoose.connect(process.env.mongo_atlas_link);

module.exports = connectDB;
