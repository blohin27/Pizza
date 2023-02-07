import { PizzaItemComponent } from "../pizzaItem";
import styled from "styled-components";

import { observer } from "mobx-react";
import { storePizza } from "../../store";

export const PizzaComponent = observer(() => {
  const arrayItems: any[] = storePizza.getItems();

  return (
    <StyledWrap>
      <StyledWrapTwo>
        {arrayItems.map((item, index) => {
          return <PizzaItemComponent key={index} item={item} />;
        })}
      </StyledWrapTwo>
    </StyledWrap>
  );
});

const StyledWrapTwo = styled.div`
  width: 655px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 787px) {
    width: 440px;
  }
  @media (max-width: 575px) {
    width: 230px;
  }
`;

const StyledWrap = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
`;
