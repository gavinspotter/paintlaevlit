const mongoose = require("mongoose")

const Schema = mongoose.Schema

const receivepaintsSchema = new Schema ({
    room: { type: String, trim: true},
  roomdimensions: {
    length: {type: Number},
    width: {type: Number}
  },
  colorants: {
    jl: {type:Number},
    il: {type: Number},
    el: {type: Number},
    axl: {type: Number},
    cl: {type: Number},
    rl: {type: Number},
    vl: {type: Number},
    ll: {type: Number},
    dl: {type:Number}
  },
  paintname: { type: String, trim: true, required: true },
  paintcode: { type: String, trim: true},
  paintbrand: { type: String, trim: true},
  storecode: { type: String, trim: true},
  receiver: { type: mongoose.Types.ObjectId, required: true, ref: "User" },

})

module.exports = mongoose.model("Receivepaint", receivepaintsSchema)