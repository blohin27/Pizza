import { useState } from "react";
import HeaderComponent from "../../component/header/Header.component";
import styled from "styled-components";
import { SortingComponent } from "../../component/sorting";
import { PizzaComponent } from "../../component/pizza/PizzaComponent";
import { observer } from "mobx-react";

export const LandingCpomponent = observer(() => {
  return (
    <StyledWrapContent>
      <HeaderComponent />
      <SortingComponent />
      <PizzaComponent />
    </StyledWrapContent>
  );
});

const StyledWrapContent = styled.div`
  width: 80%;
  padding: 20px 50px 20px 50px;
  border-radius: 7px;
  margin: 0 auto;
  background: white;
`;
