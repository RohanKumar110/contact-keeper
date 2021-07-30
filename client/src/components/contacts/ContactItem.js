import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

function ContactItem({ contact }) {
  const contactContext = useContext(ContactContext);
  const { setCurrentContact, clearCurrentContact, deleteContact, clearFilter } =
    contactContext;
  const { _id, name, email, phone, type } = contact;

  const handleEdit = () => {
    setCurrentContact(contact);
    clearFilter();
  };

  const handleDelete = () => {
    deleteContact(_id);
    clearFilter();
    clearCurrentContact();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " + (type === "personal" ? "badge-primary" : "badge-success")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            {" "}
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            {" "}
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </p>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
