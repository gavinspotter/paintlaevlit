const mongoose = require("mongoose")

const HttpError = require("../models/HttpError")

const Sentpaint = require("../models/sendpaints")

const getSentPaintsByUserId = async (req, res, next) => {
    const userId = req.params.uid

    let sentpaint 
    
  

}

exports.getSentPaintsByUserId = getSentPaintsByUserId