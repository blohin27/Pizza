import { Link } from "react-router-dom";
import { storePizza } from "../../store";
import logo from "../../Icon/logo.png";
import styled from "styled-components";

export const Cart = () => {
  return (
    <div>
        <StyledLogo>
          <StyledLogoIcon>
            <img src={logo} />
          </StyledLogoIcon>
          <div>
            <StyledNameProject>REACT PIZZA</StyledNameProject>
            <StyledSlogan>самая вкусная пицца во вселенной</StyledSlogan>
          </div>
        </StyledLogo>

      <Link to={"/"}>Вернуться</Link>
      {storePizza.shoppingCart.items.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};

const StyledLogo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
const StyledNameProject = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #181818;
`;
const StyledSlogan = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #7b7b7b;
`;

const StyledLogoIcon = styled.div`
  margin: 5px 10px 0 0;
`;
