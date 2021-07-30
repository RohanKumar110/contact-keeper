import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const contactContext = useContext(ContactContext);
  const {clearContacts} = contactContext;

  const handleLogout = () => {
    logout();
    clearContacts();
  };
  const btnStyle = {
    background: "none",
    border: "none",
    outline: "none",
    color: "white",
    marginLeft: "15px",
    cursor: "pointer",
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <button style={btnStyle} onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </button>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h2>
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h2>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
