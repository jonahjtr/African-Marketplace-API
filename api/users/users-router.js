const router = require("express").Router();
const Users = require("./users-model.js");
const bcrypt = require("bcryptjs");
const buildToken = require("./token-builder");
const { checkUsernameExists, validateRoleName } = require("./middleware");

router.post("/register", validateRoleName, async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const user = { username, password: hash, role };
    const newUser = await Users.add(user);
    console.log(newUser);
    return res.json({
      message: ` username created: ${newUser.username}`,
      username: newUser.username,
      role: newUser.role,
    });
  } catch (err) {
    next(err);
  }
});

router.post("/login", checkUsernameExists, (req, res, next) => {
  const { password } = req.body;
  if (bcrypt.compareSync(password, req.user.password)) {
    const token = buildToken(req.user);
    res.json({ message: `${req.user.username}`, token: token });
  } else {
    next({ status: 401, message: "Invalid Credentials" });
  }
});

module.exports = router;
