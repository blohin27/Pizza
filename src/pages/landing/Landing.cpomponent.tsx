import { useState } from "react";
import HeaderComponent from "../../component/header/Header.component";
import styled from "styled-components";
import { SortingComponent } from "../../component/sorting";
import { PizzaComponent } from "../../component/pizza/PizzaComponent";
//(Math.random() < 0.5 ? -1 : 1)
import { observer } from "mobx-react";

export const LandingCpomponent = observer(() => {
  enum G {
    a,
    b,
  }
  return (
    <StyledWrapContent>
      <HeaderComponent />
      <SortingComponent />
      <PizzaComponent />
    </StyledWrapContent>
  );
});

const StyledWrapContent = styled.div`
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  max-width: 699px;
  padding: 20px 50px 20px 50px;
  border-radius: 7px;
  margin: 0 auto;
  background: white;
`;
