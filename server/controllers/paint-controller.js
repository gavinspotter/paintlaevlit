const mongoose = require("mongoose");

const Paint = require("../models/paints");
const HttpError = require("../models/HttpError");

const User = require("../models/user");

const getPaintById = async (req, res, next) => {
  const paintId = req.params.pid

  let paint

  try {
    paint = await Paint.findById(paintId)
  } catch (err) {
    const error = new HttpError("couldnt find paint by id", 500)
    return next(error)
  }

  if (!paint) {
    const error = new HttpError("couldnt find paint", 404)
    return next(error)
  }

  res.json({ paint: paint.toObject({ getters: true }) })

}


const getPaintsByUserId = async (req, res, next) => {
  const userId = req.params.uid

  let paints

  try {
    paints = await Paint.find({ creator: userId })
  } catch (err) {
    const error = new HttpError("fetching paints failed, please try again", 500)
    return next(error)
  }

  if (!paints || paints.length === 0) {
    return next(new HttpError("could not find any paints"))
  }

  res.json({ paints: paints.map((paint) => paint.toObject({ getters: true })) })

}

const createPaint = async (req, res, next) => {
  const {
    room,
    colorants,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    base,
    creator,
  } = req.body;

  const createdPaint = new Paint({
    room,
    colorants,
    roomdimensions,
    paintname,
    paintcode,
    paintbrand,
    storecode,
    base,
    creator: req.userData.userId
  });

  let user;

  try {
    user = await User.findById(req.userData.userId);
  } catch {
    const error = new HttpError("creating paint failed please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("could not find user for provided id", 404);
    return next(error);
  }



  try {

    await createdPaint.save();

  } catch (err) {
    // const error = new HttpError("creating paint fail please try again", 500);
    // return next(error);
  }

  try {
    user.paints.push(createdPaint);
  } catch (error) {

  }

  try {
    await user.save()
  } catch (error) {

  }

  res.status(201).json({ paint: createdPaint });
};

const updatePaint = async (req, res, next) => {

  const {
    paintname,
    paintcode,
    paintbrand,
    base,
    storecode
  } = req.body

  const paintId = req.params.pid

  let paint

  try {
    paint = await Paint.findById(paintId)
  } catch (err) {
    const error = new HttpError(
      "couldnt find id",
      500
    )
    return next(error)

  }

  paint.paintname = paintname
  paint.paintcode = paintcode
  paint.paintbrand = paintbrand
  paint.base = base
  paint.storecode = storecode

  try {
    await paint.save()
  } catch (err) {
    const error = new HttpError(
      "couldnt save update",
      500
    )
    return next(error)
  }

  res.status(200).json({ paint: paint.toObject({ getters: true }) })

}

const deletePaint = async (req, res, next) => {
  const paintId = req.params.pid

  let paint

  try {
    paint = await Paint.findById(paintId).populate("creator")

  } catch (err) {
    const error = new HttpError("couldnt find paint", 500)
    return next(error)

  }

  try {
    await paint.remove()
  } catch (err) {

  }

  try {
    paint.creator.paints.pull(paint)
  } catch (err) {

  }

  try {
    await paint.creator.save()
  } catch (err) {

  }

  res.status(200).json({ message: "deleted" })
}

exports.getPaintById = getPaintById
exports.createPaint = createPaint;
exports.getPaintsByUserId = getPaintsByUserId
exports.updatePaint = updatePaint
exports.deletePaint = deletePaint