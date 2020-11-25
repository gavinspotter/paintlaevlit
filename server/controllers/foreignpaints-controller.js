const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");

const Foreignpaint = require("../models/foreignpaint");

const User = require("../models/user");

const sendPlace = async (req, res, next) => {
  const {
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    reciever,
    creator,
  } = req.body;

  const createdPaint = new Foreignpaint({
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    reciever,
  });

  let userRecipient;

  try {
    userRecipient = await User.findById(reciever);
  } catch {
    const error = new HttpError("creating a place failed", 500);
    return next(error);
  }

  if (!userRecipient) {
    const error = new HttpError("could not find user by id", 404);
    return next(error);
  }
};

exports.sendPlace = sendPlace;
