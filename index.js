require("dotenv").config();
const debug = require("debug")("thingsIAlreadyKnow:root");

const connectToDatabase = require("./database");
const initializeServer = require("./server");

const port = process.env.SERVER_PORT || 3001;

const mongoConnectionString = process.env.MONGO_STRING;

(async () => {
  try {
    await connectToDatabase(mongoConnectionString);
    await initializeServer(port);
    debug("Estamos activos");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
