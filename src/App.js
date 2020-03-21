import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./containers/HomePage";
import GlobalStyle from "./styles/Global";
import WelcomePage from "./containers/WelcomePage";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

function App() {
  const [activeUser, setActiveUser] = useState(false);

  const userLoginToggle = () => setActiveUser(!setActiveUser);

  return (
    <>
      {activeUser ? (
        <>
          <HomePage /> <GlobalStyle />
        </>
      ) : (
        <Router>
          <NavBar />
          <Switch>
            <Route
              path="/"
              exact={true}
              render={props => <WelcomePage {...props} />}
            />{" "}
            <Route
              path="/register"
              render={props => <RegisterForm {...props} />}
            />{" "}
            <Route path="/login" render={props => <LoginForm {...props} />} />{" "}
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
