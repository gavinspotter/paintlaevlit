const HttpError = require("../models/HttpError");
const User = require("../models/user");

const getUsersByUsername = async (req, res, next) => {
  const userName = req.params.usernamee;

  let user;

  try {
    user = await User.find({ email: userName }, "-password");
  } catch (err) {
    const error = new HttpError(
      "fetching user by email failed, please try again later",
      500
    );
    return next(error);
  }

  res.json({ user });
};

const signup = async (req, res, next) => {
  const { username, name, email, password } = req.body;

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
    username,
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

  res.json({ message: "logged in" });
};

exports.signup = signup;
exports.login = login;
exports.getUsersByUsername = getUsersByUsername;
