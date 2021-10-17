const router = require("express").Router();
const Users = require("./users-model.js");

router.get("/", (req, res, next) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
      console.log("console logging something");
    })
    .catch((err) => {
      console.log("it didnt work man");
    });
});

module.exports = router;
