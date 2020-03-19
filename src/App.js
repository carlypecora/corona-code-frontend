import React, { useState } from "react";
import "./App.css";

import HomePage from "./containers/HomePage";
import GlobalStyle from "./styles/Global";
import WelcomePage from "./containers/WelcomePage";

const [activeUser, setActiveUser] = useState(false);

const userLoginToggle = () => setActiveUser(!setActiveUser);

function App() {
  return (
    <>
      {
        <>
          activeUser ?
          <HomePage />
          <GlobalStyle />
          :
          <WelcomePage />
        </>
      }
    </>
  );
}

export default App;
