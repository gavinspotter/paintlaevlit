const HttpError = require("../models/HttpError")

const Receivedpaint = require("../models/receivepaints")

const getReceivedPaintsByUserId = async (req, res, next) => {
    const userId = req.params.uid 
}

exports.getReceivedPaintsByUserId = getReceivedPaintsByUserId