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
};

exports.sendPlace = sendPlace;
