require("dotenv").config();
const express = require("express");
const Thing = require("../../database/models/Thing");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

module.exports = router;
