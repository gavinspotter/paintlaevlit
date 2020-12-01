const mongoose = require("mongoose");

const Paint = require("../models/paints");
const HttpError = require("../models/HttpError");

const User = require("../models/user");


const getPaintsByUserId = async(req, res, next) => {
  const userId = req.params.uid

  let paints

  try {
    paints = await Paint.find({creator: userId})
  } catch (err) {
    const error = new HttpError("fetching paints failed, please try again", 500)
    return next(error)
  }

  if (!paints || paints.length === 0) {
    return next(new HttpError("could not find any paints"))
  }

  res.json({paints: paints.map((paint)=> paint.toObject({getters:true}))})

}

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

    await createdPaint.save();
    
  } catch (err) {
    const error = new HttpError("creating paint fail please try again", 500);
    return next(error);
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

  
}

const deletePaint = async (req, res, next) => {
    const paintId = req.params.pid

    let paint 

    try {
      paint = await Paint.findById(paintId).populate("creator")

    } catch (err) {
      const error = new HttpError("couldnt find paint", 500)
      return next (error)
      
    }

    try {
      await paint.remove()
    } catch (err) {
      
    }
  
    try {
      paint.creator.paints.pull(paint)
    } catch (err) {
      
    }

}

exports.createPaint = createPaint;
exports.getPaintsByUserId = getPaintsByUserId
