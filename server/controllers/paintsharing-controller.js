const mongoose = require("mongoose")
const HttpError = require("../models/HttpError")

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

    let sendingUser

    try {
        sendingUser = await User.findById(sender)
    } catch {
        const error = new HttpError ("couldnt find sender id", 500)
        return next(error)
    }

    if (!sendingUser) {
        const error = new HttpError("couldnt find user id", 404)
        return next(error)
    }

    try {
        await sendedPaint.save()
    } catch (error) {
        
    }

    try {
        sendingUser.sendpaints.push(sendedPaint)
    } catch (error) {
        
    }

    try {
        await sendingUser.save()
    } catch (error) {
        
    }

    let receivingUser

    try {
        receivingUser = await User.findById(receiver)
    } catch (error) {
        
    }

    if (!receivingUser) {
        const error = new HttpError("couldnt find user id", 404)
    }

    try {
        await receivedPaint.save()
    } catch (error) {
        
    }

    try {
        receivingUser.receivepaints.push(receivedPaint)
    } catch (error) {
        
    }

    try {
        await receivingUser.save()
    } catch (error) {
        
    }

}

exports.sharePaint = sharePaint
