const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const { check } = require("express-validator");
const catchAsync = require("../utils/catchAsync");
const protectRoute = require("../middlewares/auth");

// @route   GET api/auth
// @desc    Get logged in user
// @access  PRIVATE
router.get("/", protectRoute, catchAsync(auth.getLoggedInUser));

// @route   POST api/auth
// @desc    Auth user & get token
// @access  PUBLIC
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please include a password").exists(),
  ],
  catchAsync(auth.authenticate)
);

module.exports = router;
