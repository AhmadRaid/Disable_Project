const express = require("express");
//const routesVersioning = require("express-routes-versioning")();

const router = express.Router();

router.use("/auth", require("./v1/auth"));

router.use("/user", require("./v1/user"));

router.use("/category", require("./v1/category"));

router.use("/job", require("./v1/job"));

router.use("/transaction", require("./v1/transaction"));

router.use("/course", require("./v1/course"));

router.use("/question", require("./v1/question"));

module.exports = router;
