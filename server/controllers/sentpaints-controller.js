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

const deleteSentPaint = async (req, res, next) => {
    const paintId = req.params.spid

    let paint 

    try {
        paint = await Sentpaint.findById(paintId)
    } catch (err) {
        const error = new HttpError("could find paint by id", 500)
    }

    if (!journal) {
        const error = new HttpError("couldnt find paint")
        return next(error)
    }

    try {
        await paint.remove()
    } catch (err) {
        
    }

    try {
        paint.sender.paints.pull(paint)
    } catch (err) {
        
    }
}



exports.getSentPaintsByUserId = getSentPaintsByUserId