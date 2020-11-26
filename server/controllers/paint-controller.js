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
  } = req.body;
};

exports.createPaint = createPaint;
