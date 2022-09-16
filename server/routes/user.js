const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');
const childController = require('../controllers/childController');

router.post("/login", userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.id)
});

router.post("/newUser", userController.createNewUser,(req, res) => {
  res.status(200).json(res.locals.newUserId)
});

// router.put("/", (req, res) => {});

// router.delete("/", (req, res) => {});

module.exports = router;
