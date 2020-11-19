const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/HttpError");

const app = express();

app.use(bodyParser.json());
