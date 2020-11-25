const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foreignpaintSchema = new Schema({
  room: { type: String, trim: true },
  roomdimensions: {
    lenght: { type: Number },
    width: { type: Number },
  },
  paintname: { type: String, trim: true },
  paintcode: { type: String, trim: true },
  paintbrand: { type: String, trim: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Foreignpaints", foreignpaintSchema);