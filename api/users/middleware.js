const jwt = require("jsonwebtoken");
const Users = require("../users/users-model");
const { JWT_SECRET } = require("./secret");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({ status: 401, message: "Token required" });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return next({ status: 401, message: "Token invalid" });
    }

    req.decodedToken = decodedToken;
    return next();
  });
};

const only = (role_name) => (req, res, next) => {
  if (req.decodedToken.role_name === role_name) {
    next();
  } else {
    next({ status: 403, message: "This is not for you" });
  }
  next();
};

const checkUsernameExists = async (req, res, next) => {
  const { username } = req.body;
  const user = await Users.findBy({ username }).first();
  if (user) {
    req.user = user;
    next();
  } else {
    next({ status: 401, message: "Invalid credentials" });
  }
};

const validateRoleName = (req, res, next) => {
  if (!req.body.role) {
    req.body.role = "user";
    next();
  } else {
    req.body.role = "owner";
    next();
  }

  // if (!req.body.role || !req.body.role.trim()) {
  //   req.role = "user";
  //   next();
  // } else if (req.body.role.trim() === "owner") {
  //   req.role = "owner";
  // } else if (req.body.role.trim().length > 32) {
  //   next({ status: 422, message: "Role name can not be longer than 32 chars" });
  // } else {
  //   req.role = req.body.role.trim();
  //   next();
  // }
};

module.exports = {
  restricted,
  checkUsernameExists,
  validateRoleName,
  only,
};
