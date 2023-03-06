const express = require("express");

const controller = require("../../../app/controller/User");

const router = express.Router();

router.get("/listing", controller.getAllUser);

router.post("/add", controller.addUser);
router.put("/edit/:userId", controller.editUser);
router.get("/details/:userId");
router.delete("/delete/:userId", controller.deleteUser);

module.exports = router;
