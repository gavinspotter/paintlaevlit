const express = require("express");

const paintController = require("../controllers/paint-controller");

const router = express.Router();

router.get("/user/:uid")

router.post("/", paintController.createPaint);

router.patch("/:pid")

router.delete("/:pid")

module.exports = router;
