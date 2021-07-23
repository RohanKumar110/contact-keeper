const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    GET all user's contacts
// @access  PRIVATE
router.get("/", (req, res) => {
  res.send("Get all user's contact");
});

// @route   GET api/contacts
// @desc    Add new contact
// @access  PRIVATE
router.post("/", (req, res) => {
  res.send("Add new contact");
});

// @route   PUT api/contacts
// @desc    Update the Contact
// @access  PRIVATE
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @route   DELETE api/contacts
// @desc    Delete the Contact
// @access  PRIVATE
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
