const express = require("express");

const paintController = require("../controllers/paint-controller");

const router = express.Router();

router.post("/", paintController.createPaint);

module.exports = router;
