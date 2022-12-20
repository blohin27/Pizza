import styled from "styled-components";
import chisburgerPizza from "../../Icon/chisburgerPizza.png";
import { FC, useState } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";

export const PizzaItemComponent: FC<any> = observer(({ item }) => {
  const [stateDough1, setStateDough1] = useState(1);
  const [stateDough2, setStateDough2] = useState(0);
  const [stateSize, setStateSize] = useState(26);
  console.log(toJS(item));

  return (
    <WrapperPizzaItem>
      <StyledIcon src={chisburgerPizza}></StyledIcon>

      <StyledName>{item.name}</StyledName>

      <StyledSorting>
        <StyledDough>
          <StyledItem
            onClick={() => {
              setStateDough1(1);
              setStateDough2(0);
            }}
            active={stateDough1}
          >
            тонкое
          </StyledItem>
          <StyledItem
            onClick={() => {
              setStateDough2(1);
              setStateDough1(0);
            }}
            active={stateDough2}
          >
            традиционное
          </StyledItem>
        </StyledDough>
        <StyledSize>
          <StyledItem26
            onClick={() => {
              setStateSize(26);
            }}
            sizePizza={stateSize}
          >
            26 см
          </StyledItem26>
          <StyledItem30
            onClick={() => {
              setStateSize(30);
            }}
            sizePizza={stateSize}
          >
            30 см
          </StyledItem30>
          <StyledItem40
            onClick={() => {
              setStateSize(40);
            }}
            sizePizza={stateSize}
          >
            40 см
          </StyledItem40>
        </StyledSize>
      </StyledSorting>

      <StyledPriceAndButton>
        <StyledPrice>{item.price}</StyledPrice>
        <StyledButton>+ Добавить</StyledButton>
      </StyledPriceAndButton>
    </WrapperPizzaItem>
  );
});
const StyledItem26 = styled.div<{ sizePizza?: number }>`
  cursor: pointer;
  background: ${(props) => (props.sizePizza === 26 ? "white" : "")};
`;
const StyledItem30 = styled.div<{ sizePizza?: number }>`
  cursor: pointer;
  background: ${(props) => (props.sizePizza === 30 ? "white" : "")};
`;
const StyledItem40 = styled.div<{ sizePizza?: number }>`
  cursor: pointer;
  background: ${(props) => (props.sizePizza === 40 ? "white" : "")};
`;

const StyledPriceAndButton = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;
const StyledPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.015em;
  color: #000000;
`;
const StyledButton = styled.div`
  cursor: pointer;
  border: 2px solid #eb5a1e;
  border-radius: 25px;
  color: #eb5a1e;
  padding: 2px 10px 2px 10px;
  &:hover {
    background: #eb5a1e;
    color: white;
  }
`;

const WrapperPizzaItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 10px;
  margin: 10px;
  margin-bottom: 20px;
  align-items: center;
`;
const StyledItem = styled.div<{ active?: number }>`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  background: ${(props) => {
    return props.active === 1 ? "white" : "";
  }};
`;
const StyledSize = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
`;

const StyledIcon = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`;
const StyledName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
  color: #000000;
`;
const StyledSorting = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #e8e8e8;
  padding: 0px 10px 10px 10px;
`;
const StyledDough = styled.div`
  display: flex;
`;
