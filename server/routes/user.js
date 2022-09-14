const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/login", userController.verifyUser, (req, res) => {
  res.sendStatus(200);
});

router.post("/", userController.createNewUser, (req, res) => {
  res.sendStatus(200).json(console.log('New user successfully created!'));
});

// router.put("/", (req, res) => {});

// router.delete("/", (req, res) => {});

module.exports = router;
