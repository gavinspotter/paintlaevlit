const mongoose = require("mongoose");

const Paint = require("../models/paints");

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
};

exports.createPaint = createPaint;
