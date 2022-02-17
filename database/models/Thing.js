const { model, Schema } = require("mongoose");

const ThingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const Thing = model("Thing", ThingSchema, "Things");

module.exports = Thing;
