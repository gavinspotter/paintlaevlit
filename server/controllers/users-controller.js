const HttpError = require("../models/HttpError");
const User = require("../models/user");

const getUserByEmail = async (req, res, next) => {

  const {email} = req.body

  let user;

  try {
    user = await User.find({ email: email }, "-password");
  } catch (err) {
    const error = new HttpError(
      "fetching user by email failed, please try again later",
      500
    );
    return next(error);
  }

  res.status(201).json({ user: user.map((id)=> id.toObject({getters: true})) });
};

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
    password,
    paints: [],
    sendpaints: [],
    receivepaints: []
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("signing up failed please try again.", 500);
    console.log(err)
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("login in failed please try again later", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      401
    );
    return next(error);
  }

  res.json({ 
    message: "logged in",
    user: existingUser.toObject({ getters: true }) });
};

exports.signup = signup;
exports.login = login;
exports.getUserByEmail = getUserByEmail;
