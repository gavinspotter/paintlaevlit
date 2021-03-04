const express = require("express")

const paintsharingController = require("../controllers/paintsharing-controller")


const checkAuth = require('../middleware/check-auth');

const router = express.Router()

router.use(checkAuth);

router.post("/", paintsharingController.sharePaint)

module.exports = router