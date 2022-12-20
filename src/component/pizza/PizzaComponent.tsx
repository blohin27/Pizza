import { PizzaItemComponent } from "../pizzaItem";
import styled from "styled-components";

import { observer } from "mobx-react";
import { storePizza } from "../../store";
import { toJS } from "mobx";

export const PizzaComponent = observer(() => {
  const arrayItems: any[] = storePizza.getItems();

  return (
    <StyledWrap>
      {arrayItems.map((item, index) => {
        return <PizzaItemComponent key={index} item={item} />;
      })}
    </StyledWrap>
  );
});

const StyledWrap = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
