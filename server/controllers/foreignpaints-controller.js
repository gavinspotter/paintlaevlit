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
  } = req.body;

  const foreignPaint = new Foreignpaints({
    room,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
  });

  const email = req.params.email;

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
};
