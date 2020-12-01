const mongoose = require("mongoose")

const HttpError = require("../models/HttpError")

const Sentpaint = require("../models/sendpaints")

const getSentPaintsByUserId = async (req, res, next) => {
    const userId = req.params.uid

    let sentpaint 

  try {
      sentpaint = await Sentpaint.find({sender: userId})
  } catch (err) {
      const error = new HttpError(" fetching sent paint failed", 500)
      return next(error)
  }

  if (!sentpaint || sentpaint.length === 0) {
    return next(new HttpError("could not find sent paint"))
}

  res.json({sentpaint: sentpaint.map((sp)=> sp.toObject({getters: true}))})

}

exports.getSentPaintsByUserId = getSentPaintsByUserId