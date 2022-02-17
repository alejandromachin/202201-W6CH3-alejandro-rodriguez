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
const Thing = model("Thing", ThingSchema, "things");

module.exports = Thing;
