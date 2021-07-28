import "../App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layout/Navbar";
import Login from "./auth/Login";
import Register from "./auth/Register";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AuthState from "../context/auth/AuthState";
import ContactState from "../context/contact/ContactState";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </ContactState>
    </AuthState>
  );
}

export default App;
