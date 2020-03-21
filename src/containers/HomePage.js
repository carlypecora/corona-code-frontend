import React, { useState } from "react";
import styled, { css } from "styled-components";

import NavBar from "../components/NavBar";
import StatsContainer from "./StatsContainer";
import CountriesContainer from "./CountriesContainer";

export default function HomePage() {
  const [navBarView, setNavBarView] = useState(false);

  const handleNavBar = () => setNavBarView(!navBarView);

  return (
    <>
      <NavBar navBarView={navBarView} handleNavBar={handleNavBar} />
      <Wrapper>
        <StatsContainer />
        <CountriesContainer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
