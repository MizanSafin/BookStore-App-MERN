const mongoose = require("mongoose");

require("dotenv").config();

let connection = async () => {
  try {
    mongoose.connect(process.env.URL);
    console.log(`Database connected.`);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
};

module.exports = connection;
