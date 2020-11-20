const express = require("express");

const usersController = require("../controllers/users-controller");

const router = express.Router();

router.get("/users/:eid");

router.post("/signup", usersController.signup);

router.post("/login");

module.exports = router;
