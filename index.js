require("dotenv").config();
const debug = require("debug")("thingsIAlreadyKnow:root");

const connectToDatabase = require("./database");
const getUserChoices = require("./parameters/userParameters");
const initializeServer = require("./server");

const mongoConnectionString = process.env.MONGO_STRING;

(async () => {
  try {
    const { userPort, dataBaseOption, editable } = await getUserChoices();
    await connectToDatabase(mongoConnectionString);
    await initializeServer(userPort);
    debug(`Server listening on http://localhost:${userPort}`);

    module.exports = { userPort, dataBaseOption, editable };
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
