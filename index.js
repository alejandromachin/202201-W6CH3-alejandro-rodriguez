require("dotenv").config();
const debug = require("debug")("thingsIAlreadyKnow:root");

const initializeServer = require("./server");

const port = process.env.SERVER_PORT || 3001;

(async () => {
  try {
    await initializeServer(port);
    debug("Estamos activos");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
