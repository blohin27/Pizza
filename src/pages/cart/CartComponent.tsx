import { Link } from "react-router-dom";
import { PizzaItem, storePizza } from "../../store";
import logo from "../../Icon/logo.png";
import styled from "styled-components";
import cartBlack from "../../Icon/cartBlack.png";
import trashCan from "../../Icon/trash_can.png";
import { CartItemComponent } from "../../component/cartItem";
import { observer } from "mobx-react";

export const Cart = observer(() => {
  const pizzaArray = storePizza.getUniquePizzaItems();
  console.log("Уникальныей массив", pizzaArray.length);

  return (
    <Wrap>
      <Link to={"/"}>Верунться</Link>
      <StyledLogo>
        <StyledLogoIcon>
          <img src={logo} />
        </StyledLogoIcon>
        <div>
          <StyledNameProject>REACT PIZZA</StyledNameProject>
          <StyledSlogan>самая вкусная пицца во вселенной</StyledSlogan>
        </div>
      </StyledLogo>
      {pizzaArray.length > 0 ? (
        <StyledMain>
          <StyledCartHeader>
            <StyledCartLabel>
              <StyledIconCart>
                <img src={cartBlack} />
              </StyledIconCart>
              <StyledCartText>Корзина</StyledCartText>
            </StyledCartLabel>
            <StyledBtnClearCart onClick={storePizza.cleanShoppingCart}>
              <StyledClearCartIcon>
                <img src={trashCan} />
              </StyledClearCartIcon>
              <StyledClearCartText>Очистить корзину</StyledClearCartText>
            </StyledBtnClearCart>
          </StyledCartHeader>
          {pizzaArray.map((item) => {
            return <CartItemComponent item={item} />;
          })}
          <StyledCounAndPrice>
            <StyledTotalCount>
              {" "}
              Всего пицц : {storePizza.shoppingCart.count} шт
            </StyledTotalCount>
            <StyledTotalPrice>
              {" "}
              Сумма заказа {storePizza.getAllPrice}
            </StyledTotalPrice>
          </StyledCounAndPrice>
        </StyledMain>
      ) : (
        <div>ПУСТо</div>
      )}
    </Wrap>
  );
});

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledCartLabel = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
`;
const StyledBtnClearCart = styled.div`
  display: flex;
  cursor: pointer;
`;
const StyledClearCartText = styled.div`
  margin-left: 5px;
`;
const StyledTotalCount = styled.div`
  width: 40%;
`;
const StyledCounAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;
const StyledClearCartIcon = styled.div``;
const StyledIconCart = styled.div``;
const StyledCartText = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 650;
`;
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-width: 600px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  padding: 25px 45px 25px 45px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  width: 90%;
  margin: 5px auto;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledTotalPrice = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 25px;
`;
const StyledLogo = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  align-content: center;
  align-items: center;
  align-self: center;
  padding-bottom: 50px;
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
