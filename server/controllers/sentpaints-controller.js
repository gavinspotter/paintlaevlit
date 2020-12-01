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

}

exports.getSentPaintsByUserId = getSentPaintsByUserId