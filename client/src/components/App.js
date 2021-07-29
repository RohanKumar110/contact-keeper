import "../App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./layout/Navbar";
import Alerts from "./layout/Alerts";
import Login from "./auth/Login";
import Register from "./auth/Register";
import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AuthState from "../context/auth/AuthState";
import AlertState from "../context/alert/AlertState";
import ContactState from "../context/contact/ContactState";
import setAuthToken from "../utils/setAuthToken";
import PrivateRoute from "./routing/PrivateRoute";

// Set token as Global header
if(localStorage.token){
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
