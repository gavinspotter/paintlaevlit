const express = require("express");

const foreignpaintController = require("../controllers/foreignpaints-controller");

const router = express.Router();

router.post("/", foreignpaintController.postForeignPaintByEmail);

module.exports = router;
