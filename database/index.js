const mongoose = require("mongoose");
const debug = require("debug")("thingsIAlreadyKnow:database");

const connectToDatabase = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectionString, (error) => {
      if (error) {
        debug(`couldn't connect to database: ${error.message}`);
        reject();
      }
      debug("Connected to DataBase");
      resolve();
    });
  });

module.exports = connectToDatabase;
