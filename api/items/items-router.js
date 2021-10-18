const router = require("express").Router();
const Items = require("./items-model.js");

router.get("/", (req, res, next) => {
  Items.find()
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Items.findById(req.params.id)
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  Items.updateItem(req.params.id, req.body)
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Items.add(req.body)
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  Items.deleteItem(req.params.id)
    .then((items) => {
      res.json(items);
    })
    .catch(next);
});
module.exports = router;
