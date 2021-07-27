import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContacts, clearFilter } = contactContext;
  const query = useRef("");

  useEffect(() => {
    if (filtered === null) {
      query.current.value = "";
    }
    // eslint-disable-next-line
  });

  const handleChange = (e) => {
    if (query.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type="text"
        ref={query}
        placeholder="Filter Contacts..."
        onChange={handleChange}
      />
    </form>
  );
}

export default ContactFilter;
