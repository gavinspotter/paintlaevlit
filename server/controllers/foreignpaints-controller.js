const mongoose = require("mongoose");

const HttpError = require("../models/HttpError");

const Foreignpaints = require("../models/foreignpaints");

const User = require("../models/user");

const postForeignPaintByEmail = async (req, res, next) => {
  const {
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    receiver,
  } = req.body;

  const foreignPaint = new Foreignpaints({
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    receiver,
  });

  let user;

  try {
    user = await User.findById(receiver);
  } catch {
    const error = new HttpError("creating place failed please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("could not find user for provided id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await foreignPaint.save({ session: sess });
    user.foreignpaints.push(foreignPaint);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("creating foreign paint failed", 500);
    return next(error);
  }

  res.status(201).json({ paint: foreignPaint });
};

exports.postForeignPaintByEmail = postForeignPaintByEmail;
