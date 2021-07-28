import React, { useContext,useEffect } from "react";
import ContactForm from "../contacts/ContactForm";
import ContactList from "../contacts/ContactList";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  },[]);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
}

export default Home;
