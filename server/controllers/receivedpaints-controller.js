const HttpError = require("../models/HttpError")

const Receivedpaint = require("../models/receivepaints")

const getReceivedPaintsByUserId = async (req, res, next) => {
    const userId = req.params.uid 

    let receivedpaint 

    try {
        receivedpaint = await Receivedpaint.find({receiver:userId})
    } catch (err) {
        const error = new HttpError("fetching received paint failed", 500)
        return next(error)
    }

    if(!receivedpaint || receivedpaint.length === 0){
        return next( new HttpError("couldnt find received paint"))
    }

    res.json({receivedpaint: receivedpaint.map((rp)=> rp.toObject({getters:true}))})

}

const deleteSentPaint = async (req, res, next) => {
    const paintId = req.params.rpid

    let paint 

    try {
        paint = await Receivedpaint.findById(paintId).populate("receiver")
    } catch (err) {
        const error = new HttpError("couldnt find paint by id ", 500)
        return next(error)
    }

    if (!paint) {
        const error = new HttpError("find find paint")
        return next(error)
    }

    try {
        await paint.remove()
    } catch (err) {
        
    }

    try {
        paint.receiver.receivepaints.pull(paint)
    } catch (err) {
        
    }
    
}


exports.deleteSentPaint = deleteSentPaint
exports.getReceivedPaintsByUserId = getReceivedPaintsByUserId