const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const catchAsync = require("../utils/catchAsync");
const contact = require("../controllers/contact");
const protectRoute = require("../middlewares/auth");

// @route   GET api/contacts
// @desc    GET all user's contacts
// @access  PRIVATE
router.get("/", protectRoute, catchAsync(contact.getContacts));

// @route   GET api/contacts
// @desc    Add new contact
// @access  PRIVATE
router.post(
  "/",
  [protectRoute, [check("name", "Name is Required").not().isEmpty()]],
  catchAsync(contact.createContact)
);

// @route   PUT api/contacts
// @desc    Update the Contact
// @access  PRIVATE
router.put("/:id", protectRoute, catchAsync(contact.updateContact));

// @route   DELETE api/contacts
// @desc    Delete the Contact
// @access  PRIVATE
router.delete("/:id", protectRoute, catchAsync(contact.deleteContact));

module.exports = router;
