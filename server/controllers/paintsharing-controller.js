const mongoose = require("mongoose")

const Receivepaints = require("../models/receivepaints")

const Sendpaints = require("../models/sendpaints")

const User = require("../models/user")


const sharePaint = async (req, res, next) => {

    const {
        room, 
        roomdimensions,
        paintname,
        paintcode,
        paintbrand,
        storecode,
        sender,
        receiver
    } = req.body

    const sendedPaint = new Sendpaints({
        room,
        roomdimensions,
        paintname,
        paintcode,
        paintbrand,
        storecode,
        sender
    })

    const receivedPaint = new Receivepaints({
        room,
        roomdimensions,
        paintname,
        paintcode,
        paintbrand,
        storecode,
        receiver
    })

}

exports.sharePaint = sharePaint
