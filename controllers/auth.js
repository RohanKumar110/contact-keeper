const User = require("../models/User");
const { validationResult } = require("express-validator");

module.exports.authenticate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ msg: "Invalid Credentials" });
  }
  const token = user.getSignedJwtToken();
  res.status(200).json({ token });
};

module.exports.getLoggedInUser = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id).select("-password");
  res.status(200).json(user);
};
