const express = require("express");

const paintController = require("../controllers/paint-controller");

const router = express.Router();

router.get("/:pid", paintController.getPaintById)

router.get("/user/:uid", paintController.getPaintsByUserId)

router.post("/", paintController.createPaint);

router.patch("/:pid")

router.delete("/:pid", paintController.deletePaint)

module.exports = router;
