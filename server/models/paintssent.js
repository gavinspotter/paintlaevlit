const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paintssentSchema = new Schema({
  room: { type: String, trim: true },

  paintname: { type: String, trim: true, required: true },
  paintcode: { type: String, trim: true },
  paintbrand: { type: String, trim: true },
  storecode: { type: String, trim: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Paintsent", paintssentSchema);
