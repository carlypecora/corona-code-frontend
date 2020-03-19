import React, { useState } from "react";
import styled, { css } from "styled-components";

import NavBar from "../components/NavBar";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

export default function LoginContainer() {
  const [formRender, setformRender] = useState(0);

  const handleNavBar = () => setNavBarView(!navBarView);

  const splashPageRender = () => {
    return (
      <>
        <button className="myButton" onClick={() => this.setState({ page: 3 })}>
          {" "}
          Log In{" "}
        </button>

        <button className="myButton" onClick={() => this.setState({ page: 1 })}>
          {" "}
          Sign Up{" "}
        </button>
      </>
    );
  };

  const renderUserInput = () => {
    switch (formRender) {
      case 0:
        return this.splashPageRender();
      case 1:
        return <SignUpForm />;
      case 2:
        return <LoginForm />;
    }
  };

  return (
    <>
      <NavBar navBarView={navBarView} handleNavBar={handleNavBar} />
      <Wrapper>{splashPageRender()}</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
