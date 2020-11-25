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
    creator,
  } = req.body;

  const email = req.params.email;

  const foreignPaint = new Foreignpaints({
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    creator,
  });

  let user;

  try {
    user = await User.find({ email });
  } catch (err) {
    const error = new HttpError("fetching user by email failed", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("could find email", 404);
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
