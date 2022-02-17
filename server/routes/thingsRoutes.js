require("dotenv").config();
const express = require("express");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

module.exports = router;
