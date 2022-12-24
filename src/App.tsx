import React from "react";

import "./App.css";
import styled from "styled-components";
import { LandingCpomponent } from "./pages/landing";
import { Routes, Route, Link } from "react-router-dom";
import { Cart } from "./pages";

function App() {
  return (
    <>
      <StyledBackground>
        <StyledApp>
          <Routes>
            <Route path={"/"} element={<LandingCpomponent />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
        </StyledApp>
      </StyledBackground>
    </>
  );
}

const StyledBackground = styled.div``;

const StyledApp = styled.div`
  background: #ffdf8c;
  padding: 10px;
  height: 100vh;
`;

export default App;
