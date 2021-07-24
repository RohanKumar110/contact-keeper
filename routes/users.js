const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const { check } = require("express-validator");
const catchAsync = require("../utils/catchAsync");

// @route   POST api/users
// @desc    Register a user
// @access  PUBLIC
router.post(
  "/",
  [
    check("name", "Please include a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please include a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  catchAsync(user.register)
);

module.exports = router;
