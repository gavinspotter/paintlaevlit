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
};

exports.createPaint = createPaint;
