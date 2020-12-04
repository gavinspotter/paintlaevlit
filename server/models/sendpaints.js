const mongoose = require("mongoose")

const Schema = mongoose.Schema

const sendpaintsSchema = new Schema({
    room: { type: String, trim: true},
  roomdimensions: {
    length: {type: Number},
    width: {type: Number}
  },
  paintname: { type: String, trim: true, required: true },
  paintcode: { type: String, trim: true },
  paintbrand: { type: String, trim: true},
  storecode: { type: String, trim: true, required: true },
  sender: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
})

  
  module.exports = mongoose.model("Sendpaint", sendpaintsSchema)