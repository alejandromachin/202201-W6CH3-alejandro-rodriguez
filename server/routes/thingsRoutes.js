require("dotenv").config();
const express = require("express");
const Thing = require("../../database/models/Thing");
const editable = require("../../index");
const { notAdminError } = require("../middlewares/errors");

const router = express.Router();

router.get("/things", async (req, res) => {
  const things = await Thing.find();
  res.json({ things });
});

router.get("/things/:id", async (req, res) => {
  const { id } = req.params;
  const things = await Thing.findById(id);
  res.json({ things });
});

router.delete("/things/:id", notAdminError);

router.post("/thing", notAdminError);
router.put("/thing/:id", notAdminError);

if (editable) {
  router.delete("/things/:id", async (req, res) => {
    const { id } = req.params;
    const things = await Thing.findByIdAndDelete(id);
    res.json({ things });
  });

  router.post("/thing", async (req, res) => {
    const newThing = req.body;

    const createdThing = await Thing.create(newThing);
    res.status(201);
    res.json(createdThing);
  });
  router.put("/thing/:id", async (req, res) => {
    const { id } = req.params;
    const newThing = req.body;
    const createdThing = await Thing.findByIdAndUpdate(id, newThing);
    res.status(201);
    res.json(createdThing);
  });
}
module.exports = router;
