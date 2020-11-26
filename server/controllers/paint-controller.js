const mongoose = require("mongoose");

const Paint = require("../models/paints");
const HttpError = require("../models/HttpError");

const User = require("../models/user");

const createPaint = async (req, res, next) => {
  const {
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    creator,
  } = req.body;

  const createdPaint = new Paint({
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
    user = await User.findById(creator);
  } catch {
    const error = new HttpError("creating paint failed please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("could not find user for provided id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPaint.save({ session: sess });
    user.paints.push(createdPaint);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("creating paint fail please try again", 500);
    return next(error);
  }

  res.status(201).json({ paint: createdPaint });
};

exports.createPaint = createPaint;
