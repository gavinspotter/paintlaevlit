const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/HttpError");

const app = express();

app.use(bodyParser.json());

app.use("/api/users");

app.use((req, res, next) => {
  const error = new HttpError("could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "an unknown error occured" });
});
