const debug = require("debug")("thingsIAlreadyKnow:root:server");
require("dotenv").config();

const notAdminError = (req, res) => {
  res.status(404);
  res.json({
    error: true,
    message: "Sorry, you are not alowed to do this.",
  });
};

const notFoundError = (req, res) => {
  res.status(404);
  res.json({
    error: true,
    message: "Page not found",
  });
};

const generalError = (err, req, res) => {
  debug(err.message);
  res.status(500);
};

module.exports = { generalError, notFoundError, notAdminError };
