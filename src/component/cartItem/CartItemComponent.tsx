import { FC, useState } from "react";
import { observer } from "mobx-react";
import { PizzaItem, storePizza } from "../../store";
import chisburgerPizza from "../../Icon/chisburgerPizza.png";
import del from "../../Icon/del.png";

import styled from "styled-components";
import {toJS} from "mobx";

interface IMyProps {
  item: PizzaItem;
}

export const CartItemComponent: FC<IMyProps> = observer(({ item }) => {
  const [state, setState] = useState();
  console.log(toJS(storePizza.shoppingCart))

  return (
    <Wrap>
      <StyledBlock1>
        <StyledIcon>
          <img src={chisburgerPizza} width={90} height={90} />
        </StyledIcon>
        <StyledPizza>
          <StyledNamePizza>{item.name}</StyledNamePizza>
          <StyledPizzaadditions>{`${item.cake}, ${item.size} см`}</StyledPizzaadditions>
        </StyledPizza>
      </StyledBlock1>
      <StyledPizzaCount>
        <button
          onClick={() => {
            storePizza.addPizzaShoppingCart(item);
          }}
        >
          +
        </button>
        {storePizza.countPizzaByIndividual(item)}
        <button
          onClick={() => {
            storePizza.deletePizzaIndividualOne(item);
          }}
        >
          -
        </button>
      </StyledPizzaCount>
      <StyledPizzaPrice>
        {storePizza.priceTotalPizzaByIndividual(item)}
      </StyledPizzaPrice>
      <StyledBtn
        onClick={() => {
          storePizza.deletePizzaIndividual(item);
        }}
      >
        <img src={del} />
      </StyledBtn>
    </Wrap>
  );
});

const Wrap = styled.div`
  margin: 10px 0px;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const StyledIcon = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  object-fit: cover;
`;
const StyledPizza = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  align-content: center;
`;
const StyledBtnCross = styled.div``;
const StyledBtn = styled.div`
  cursor: pointer;
  align-self: center;
  align-items: center;
  align-content: center;
\` ;`;
const StyledNamePizza = styled.div`
  font-weight: 700;
  font-size: 25px;
`;
const StyledPizzaCount = styled.div`
  width: 10%;
  justify-content: center;
  display: flex;
  align-self: center;
  align-items: center;
  align-content: center;
\` ;`;
const StyledPizzaPrice = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  align-content: center;
  width: 10%;
\` ;`;
const StyledPizzaDelete = styled.div``;
const StyledBlock1 = styled.div`
  display: flex;
  width: 50%;
`;
const StyledPizzaadditions = styled.div``;
