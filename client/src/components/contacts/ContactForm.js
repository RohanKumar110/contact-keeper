import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactForm() {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, currentContact, clearCurrentContact } =
    contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, currentContact]);

  const { name, email, phone, type } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleClear = () => {
    clearCurrentContact();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrentContact();
    }
    clearCurrentContact();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">
        {currentContact ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={handleChange}
      />
      <h4>Contact Type </h4>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={handleChange}
      />
      {"  "}
      Personal
      <input
        style={{ marginLeft: "10px" }}
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={handleChange}
      />
      {"  "}
      Professional
      <div>
        <button className="btn btn-primary btn-block">
          {currentContact ? "Update Contact" : "Add Contact"}
        </button>
      </div>
      {currentContact && (
        <div className="my-1">
          <button className="btn btn-light btn-block" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
