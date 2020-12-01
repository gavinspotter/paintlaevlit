const express = require("express")

const paintsharingController = require("../controllers/paintsharing-controller")

const router = express.Router()

router.post("/", paintsharingController.sharePaint)

module.exports = router