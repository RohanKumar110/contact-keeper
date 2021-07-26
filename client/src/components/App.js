import "../App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layout/Navbar";
import React, { Fragment } from "react";
import ContactState from "../context/contact/ContactState";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <ContactState>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </ContactState>
  );
}

export default App;
