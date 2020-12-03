const HttpError = require("../models/HttpError")

const Receivedpaint = require("../models/receivepaints")

const getReceivedPaintsByUserId = async (req, res, next) => {
    const userId = req.params.uid 

    let receivedpaint 

    try {
        receivedpaint = await Receivedpaint.find({sender:userId})
    } catch (err) {
        const error = new HttpError("fetching received paint failed", 500)
        return next(error)
    }

    

}

exports.getReceivedPaintsByUserId = getReceivedPaintsByUserId