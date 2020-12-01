const express = require("express")

const receivedpaintsRouter = require("../controllers/receivedpaints-controller")

const router = express.Router()

router.get("/user/:uid")

router.delete("/:rpid")