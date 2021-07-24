const User = require("../models/User");
const { validationResult } = require("express-validator");

module.exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });

  // Check if user with giver email exists
  if (user) {
    return res.status(400).json({ msg: "User already exists" });
  }

  user = new User({ name, email, password });
  user = await user.save();
  const token = user.getSignedJwtToken();
  res.status(200).json({ token });
};
