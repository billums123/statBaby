const express = require("express");
const router = express.Router();
const napsController = require('../controllers/napsController');

router.post("/list", napsController.getNaps, (req, res) => {
    res.status(200).json(res.locals.naps)
});
router.post("/", napsController.addNap, (req, res) => {
    res.sendStatus(200)
  });

  router.delete("/", napsController.deleteNap, (req, res) => {
    res.sendStatus(200);
  });

// // router.put("/", (req, res) => {});


// router.put("/", childController.updateChild, (req, res) => {
//   res.sendStatus(200).json(console.log('updated child\'s info!'));
// });
module.exports = router;
