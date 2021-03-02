const express = require("express");

const paintController = require("../controllers/paint-controller");

const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.get("/user/:uid", paintController.getPaintsByUserId)

router.get("/:pid", paintController.getPaintById)



router.patch("/:pid", paintController.updatePaint)

router.delete("/:pid", paintController.deletePaint)

router.use(checkAuth);

router.post("/", paintController.createPaint);

module.exports = router;
