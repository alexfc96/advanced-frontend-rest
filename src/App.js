import React, { Component } from "react";
import { Switch } from "react-router-dom";

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PriveteRoute";

import Protected from "./views/Protected";
import LoginWithAuth from "./views/Login";
import SignupWithAuth from "./views/Signup";

import AuthProvider from "./context/authContext";
import MainNavBar from "./components/MainNavBar/MainNavBar";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div>
          <div className="App">
            <MainNavBar />
            <Switch>
              <AnonRoute exact path={"/signup"} component={SignupWithAuth} />
              <AnonRoute exact path={"/login"} component={LoginWithAuth} />
              <PrivateRoute exact path={"/protected"} component={Protected} />
            </Switch>
          </div>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
