const mongoose = require("mongoose")

const Schema = mongoose.Schema

const receivepaintsSchema = new Schema ({
    room: { type: String, trim: true, required: true },
  roomdimensions: {
    length: {type: Number},
    width: {type: Number}
  },
  paintname: { type: String, trim: true, required: true },
  paintcode: { type: String, trim: true, required: true },
  paintbrand: { type: String, trim: true, required: true },
  storecode: { type: String, trim: true, required: true },
  receiver: { type: mongoose.Types.ObjectId, required: true, ref: "User" },

})

module.exports = mongoose.model("Receivepaint", receivepaintsSchema)