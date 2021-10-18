const router = require("express").Router();
const Items = require("./items-model.js");

router.get("/", (req, res, next) => {
  Items.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});

module.exports = router;
