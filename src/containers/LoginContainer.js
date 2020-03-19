import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function LoginContainer() {
  const welcomePageRender = () => {
    return (
      <>
        <Router>
          <Link to="/login">
            <button> Log In </button>
          </Link>
          <Link to="/register">
            <button> register </button>
          </Link>
        </Router>
      </>
    );
  };

  return (
    <>
      <Wrapper>{welcomePageRender()}</Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
