const express = require("express");
const router = express.Router();
const childController = require('../controllers/childController');

router.get("/", childController.getChildren, (req, res) => {
  res.sendStatus(200).json(console.log('retrieved children!'));
});

router.post("/", childController.addChild, (req, res) => {
  res.sendStatus(200).json(console.log('added child!'));
});

// router.put("/", (req, res) => {});

router.delete("/", childController.deleteChild, (req, res) => {
  res.sendStatus(200).json(console.log('deleted child!'));
});

router.put("/", childController.updateChild, (req, res) => {
  res.sendStatus(200).json(console.log('updated child\'s info!'));
});
module.exports = router;