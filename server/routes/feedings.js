const express = require("express");
const router = express.Router();
const feedingsController = require('../controllers/feedingsController');

router.post("/list", feedingsController.getFeedings, (req, res) => {
    res.status(200).json(res.locals.feedings)
});
router.post("/", feedingsController.addFeeding, (req, res) => {
    res.sendStatus(200)
  });

  router.delete("/", feedingsController.deleteFeeding, (req, res) => {
    res.sendStatus(200);
  });

// // router.put("/", (req, res) => {});


// router.put("/", childController.updateChild, (req, res) => {
//   res.sendStatus(200).json(console.log('updated child\'s info!'));
// });
module.exports = router;
