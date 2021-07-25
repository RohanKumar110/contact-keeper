const Contact = require("../models/Contact");
const { validationResult } = require("express-validator");

module.exports.getContacts = async (req, res) => {
  const { id } = req.user;
  const contacts = await Contact.find({ user: id }).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};

module.exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, phone, type } = req.body;
  const contact = new Contact({ name, email, phone, type });
  contact.user = req.user.id;
  const savedContact = await contact.save();
  res.status(200).json(savedContact);
};

module.exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, type } = req.body;
  // Build Contact Object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ msg: "Contact not found" });
  }
  // Check if user owns contact
  if (contact.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: "Not authorized" });
  }
  const updatedContact = await Contact.findByIdAndUpdate(id, contactFields, {
    new: true,
  });
  res.status(200).json(updatedContact);
};

module.exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ msg: "Contact not found" });
  }
  // Check if user owns contact
  if (contact.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: "Not authorized" });
  }

  await Contact.findByIdAndDelete(id);
  res.status(200).json({ msg: "Contact Deleted" });
};
