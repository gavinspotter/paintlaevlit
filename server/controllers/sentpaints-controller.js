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
        paint = await Sentpaint.findById(paintId).populate("sender")
    } catch (err) {
        const error = new HttpError("couldnt find paint by id", 500)
        return next(error)
    }

    if (!paint) {
        const error = new HttpError("couldnt find paint")
        return next(error)
    }

    try {
        await paint.remove()
    } catch (err) {
        
    }

    try {
        paint.sender.sendpaints.pull(paint)
    } catch (err) {
        console.log(err)
    }

    try {
        await paint.sender.save()
    } catch (err) {
        
    }

    res.status(200).json({message: "deleted"})
}



exports.getSentPaintsByUserId = getSentPaintsByUserId
exports.deleteSentPaint = deleteSentPaint
