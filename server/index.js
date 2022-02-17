require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("thingsIAlreadyKnow:root:server");
const thingsRouter = require("./routes/thingsRoutes");

const app = express();

app.use(morgan("dev"));

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(`Server listening on http://localhost:${port}`);
      resolve();
    });

    server.on("error", (error) => {
      const message =
        error.code === "EADDRINUSE" ? `Port ${port} busy` : error.message;

      reject(new Error(`Error on server: ${message}`));
    });
  });

app.use("/thingsialreadyknow", thingsRouter);

module.exports = initializeServer;
