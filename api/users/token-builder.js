const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./secret");

module.exports = function (user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role_name: user.role,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
};
