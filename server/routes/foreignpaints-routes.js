const express = require("express");

const foreignpaintController = require("../controllers/foreignpaints-controller");

const router = express.Router();

router.post("/:email", foreignpaintController.postForeignPaintByEmail);

module.exports = router;
