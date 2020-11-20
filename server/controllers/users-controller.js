const HttpError = require("../models/HttpError");
const User = require("../models/user");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "signing up failed please try again later",
      500
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ra_Barque.jpg",
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("signing up failed please try again.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

exports.signup = signup;
