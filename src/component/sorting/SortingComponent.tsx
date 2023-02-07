import styled, { css } from "styled-components";
import { useState } from "react";

export const SortingComponent = () => {
  const [state, setState] = useState(1);
  return (
    <WrapSorting>
      <Styled1
        state={state}
        onClick={() => {
          setState(1);
        }}
      >
        {" "}
        Все
      </Styled1>
      <Styled2
        state={state}
        onClick={() => {
          setState(2);
        }}
      >
        {" "}
        Мясные
      </Styled2>
      <Styled3
        state={state}
        onClick={() => {
          setState(3);
        }}
      >
        {" "}
        Вегетарианские
      </Styled3>
      <Styled4
        state={state}
        onClick={() => {
          setState(4);
        }}
      >
        {" "}
        Гриль
      </Styled4>
      <Styled5
        state={state}
        onClick={() => {
          setState(5);
        }}
      >
        {" "}
        Острые
      </Styled5>
      <Styled6
        state={state}
        onClick={() => {
          setState(6);
        }}
      >
        {" "}
        Закрытые
      </Styled6>
    </WrapSorting>
  );
};
const WrapSorting = styled.div`
  @media (max-width: 787px) {
    justify-content: center;
  }
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Styled1 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 1) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 1) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;

const Styled2 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 2) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 2) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;
const Styled3 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 3) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 3) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;
const Styled4 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 4) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 4) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;
const Styled5 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 5) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 5) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;
const Styled6 = styled.div<{ state?: number }>`
  cursor: pointer;
  ${(props) => {
    if (props.state === 6) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: black;
        color: white;
      `;
    }
    if (props.state !== 6) {
      return css`
        margin: 5px;
        padding: 5px 10px 5px 10px;
        border: 2px solid black;
        border-radius: 20px;
        background: white;
        color: black;
      `;
    }
  }}
`;
