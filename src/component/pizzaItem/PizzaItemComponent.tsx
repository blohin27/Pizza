import styled, { css } from "styled-components";
import chisburgerPizza from "../../Icon/chisburgerPizza.png";
import { FC, useState } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { PizzaItem, storePizza } from "../../store";
import { Link } from "react-router-dom";

export const PizzaItemComponent: FC<any> = observer(({ item }) => {
  const [itemPizza, setItemPizza] = useState<PizzaItem>({ ...item });

  return (
    <WrapperPizzaItem>
      <Link to={`/pizzainfo/${item.id}`}>
        <StyledIcon src={chisburgerPizza}></StyledIcon>
      </Link>
      <StyledName>{itemPizza.name}</StyledName>

      <StyledSorting>
        <StyledDough>
          <StyledItem
            onClick={() => {
              setItemPizza({ ...itemPizza, cake: "Тонкое" });
            }}
            active={itemPizza.cake}
          >
            тонкое
          </StyledItem>
          <StyledItem2
            onClick={() => {
              setItemPizza({ ...itemPizza, cake: "традиционное" });
            }}
            active={itemPizza.cake}
          >
            традиционное
          </StyledItem2>
        </StyledDough>

        <StyledSize>
          {itemPizza.possibleSize["26"] && (
            <StyledItem26
              onClick={() => {
                setItemPizza({
                  ...itemPizza,
                  size: "26",
                  price: itemPizza.possiblePrice["26"],
                });
              }}
              sizePizza={itemPizza.size}
            >
              26 см
            </StyledItem26>
          )}
          {itemPizza.possibleSize["30"] && (
            <StyledItem30
              onClick={() => {
                setItemPizza({
                  ...itemPizza,
                  size: "30",
                  price: itemPizza.possiblePrice["30"],
                });
              }}
              sizePizza={itemPizza.size}
            >
              30 см
            </StyledItem30>
          )}
          {itemPizza.possibleSize["40"] === true ? (
            <StyledItem40
              onClick={() => {
                setItemPizza({
                  ...itemPizza,
                  size: "40",
                  price: itemPizza.possiblePrice["40"],
                });
              }}
              sizePizza={itemPizza.size}
            >
              40 см
            </StyledItem40>
          ) : (
            ""
          )}
        </StyledSize>
      </StyledSorting>

      <StyledPriceAndButton>
        <StyledPrice>{itemPizza.price}</StyledPrice>
        <StyledButton
          onClick={() => {
            storePizza.addPizzaShoppingCart(itemPizza);
          }}
          countPizza={storePizza.countPizzaById(itemPizza)}
        >
          + Добавить{" "}
          {storePizza.countPizzaById(itemPizza) === 0
            ? ""
            : storePizza.countPizzaById(itemPizza)}
        </StyledButton>
      </StyledPriceAndButton>
    </WrapperPizzaItem>
  );
});
const StyledItem26 = styled.div<{ sizePizza?: string }>`
  cursor: pointer;
  ${(props) => (props) =>
    props.sizePizza === "26" &&
    css`
      background: #eb5a1e;
      color: white;
      border-radius: 5px;
      padding: 2px;
    `}
`;
const StyledItem30 = styled.div<{ sizePizza?: string }>`
  cursor: pointer;
  ${(props) => (props) =>
    props.sizePizza === "30" &&
    css`
      background: #eb5a1e;
      color: white;
      border-radius: 5px;
      padding: 2px;
    `}
`;
const StyledItem40 = styled.div<{ sizePizza?: string }>`
  cursor: pointer;
  ${(props) => (props) =>
    props.sizePizza === "40" &&
    css`
      background: #eb5a1e;
      color: white;
      border-radius: 5px;
      padding: 2px;
    `}
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
  &::after {
    content: " \\20BD";
  }
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.015em;
  color: #000000;
`;
const StyledButton = styled.div<{ countPizza?: number }>`
  cursor: pointer;
  border: 2px solid #eb5a1e;
  border-radius: 25px;
  color: #eb5a1e;
  padding: 2px 10px 2px 10px;
  background: ${(props) => (props.countPizza !== 0 ? " #eb5a1e" : "")};
  color: ${(props) => (props.countPizza !== 0 ? "white" : "")};
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
const StyledItem = styled.div<{ active?: string }>`
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px;

  ${(props) => {
    if (props.active === "Тонкое") {
      return css`
        background: #eb5a1e;
        color: white;
      `;
    }
    if (props.active === "традиционное") {
      return css`
        color: black;
      `;
    }
  }};
`;
const StyledItem2 = styled.div<{ active?: string }>`
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px;
  ${(props) => {
    if (props.active === "Тонкое") {
      return css`
        color: black;
      `;
    }
    if (props.active === "традиционное") {
      return css`
        background: #eb5a1e;
        color: white;
      `;
    }
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
