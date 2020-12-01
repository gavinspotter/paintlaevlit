const express = require("express")

const sentpaintController = require("../controllers/sentpaints-controller")

const router = express.Router()

router.get("/user/:uid")

router.delete("/:spid")