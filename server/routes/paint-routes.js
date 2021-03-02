const express = require("express");

const paintController = require("../controllers/paint-controller");

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.get("/user/:uid", paintController.getPaintsByUserId)

router.get("/:pid", paintController.getPaintById)

router.post("/", paintController.createPaint);

router.patch("/:pid", paintController.updatePaint)

router.delete("/:pid", paintController.deletePaint)

module.exports = router;
