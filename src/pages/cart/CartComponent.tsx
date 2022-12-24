import { Link } from "react-router-dom";
import { storePizza } from "../../store";

export const Cart = () => {
  return (
    <div>
      <Link to={"/"}>Вернуться</Link>
      {storePizza.shoppingCart.items.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};
