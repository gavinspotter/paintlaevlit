const mongoose = require("mongoose")

const Schema = mongoose.Schema

const sendpaintsSchema = new Schema({
  room: { type: String, trim: true},
  roomdimensions: {
    length: {type: Number},
    width: {type: Number}
  },
  colorants: {
    jl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    il: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    el: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    axl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    cl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    rl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    vl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    ll: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    dl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    yl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
    tl: { 
      oz: { type: Number},
      tef: { type: Number} 
    },
  },
  paintname: { type: String, trim: true, required: true },
  paintcode: { type: String, trim: true },
  paintbrand: { type: String, trim: true},
  storecode: { type: String, trim: true},
  sender: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
})

  
  module.exports = mongoose.model("Sendpaint", sendpaintsSchema)