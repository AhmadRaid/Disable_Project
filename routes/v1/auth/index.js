const express = require("express");

const controller = require("../../../app/controller/Auth");

const router = express.Router();

router.post(
  "/SignUp",
  controller.signUp
);

router.get(
  "/login",
  controller.login
);

module.exports = router;
