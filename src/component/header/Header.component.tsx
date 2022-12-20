import { useState } from "react";
import styled from "styled-components";
import logo from "../../Icon/logo.png";
import card from "../../Icon/card.png";
import { Link } from "react-router-dom";
import { storePizza } from "../../store";

const HeaderComponent = () => {
  const [state, setState] = useState();
  return (
    <WrapHeader>
      <StyledLogo>
        <StyledLogoIcon>
          <img src={logo} />
        </StyledLogoIcon>
        <div>
          <StyledNameProject>REACT PIZZA</StyledNameProject>
          <StyledSlogan>самая вкусная пицца во вселенной</StyledSlogan>
        </div>
      </StyledLogo>
      <Link to={"/cart"}>
        <ShoppingCart>
          <StyledPrice>{storePizza.shoppingCard.count} Рублей</StyledPrice>
          <StyledVerticalLine />
          <StyledCountItems>
            <StyledIconCard>
              <img src={card} />
            </StyledIconCard>
            <div>4</div>
          </StyledCountItems>
        </ShoppingCart>
      </Link>
    </WrapHeader>
  );
};

const StyledIconCard = styled.div`
  padding-right: 5px;
`;
const StyledVerticalLine = styled.div`
  width: 1px;
  height: 15px;
  background: #ffffff40;
`;
const StyledPrice = styled.div`
  text-decoration: none;
  padding-right: 5px;
`;
const StyledCountItems = styled.div`
  padding-left: 5px;
  display: flex;
`;
const ShoppingCart = styled.div`
  text-decoration: none;
  color: white;
  padding: 10px 23px 10px 23px;
  align-content: center;
  align-items: center;
  align-self: center;
  display: flex;

  background: #fe5f1e;
  border-radius: 30px;
`;
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

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 2px solid #d9d9d9;
`;
const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  background: #dcdcdc;
`;
export default HeaderComponent;
