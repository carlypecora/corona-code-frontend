import React, { useState } from "react";
import styled, { css } from "styled-components";

import NavBar from "../components/NavBar";
import LoginContainer from "./LoginContainer";

export default function WelcomePage() {
  const [navBarView, setNavBarView] = useState(false);

  const handleNavBar = () => setNavBarView(!navBarView);

  return (
    <>
      <Wrapper>
        <LoginContainer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
