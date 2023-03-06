const express = require("express");

const controller = require("../../../app/controller/Auth");
const validate = require("../../../middleware/validate");
const userSchema = require("../../../app/validation_schema/user_schema");
const loginSchema = require("../../../app/validation_schema/login_schema");

const router = express.Router();

router.post("/Signup", validate(userSchema), controller.signUp);

router.post("/login",validate(loginSchema), controller.login);

router.post("/verificationEmail", controller.verification_email);

//router.post("/forgetPassword/:userId", controller.forgetPassword);


module.exports = router;
