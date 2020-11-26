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

}

exports.sharePaint = sharePaint
