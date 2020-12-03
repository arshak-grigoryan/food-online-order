import { useDispatch } from "react-redux";
import { openBasket } from "../../store/actions";
import { CLASS_NAMES } from "../../constants";
import Icon from "../icon/Icon";
import "./shoppingCart.scss";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const onOpenBasketClick = () => {
    dispatch(openBasket());
  };

  return (
    <div className="shoppingCart" onClick={onOpenBasketClick}>
      <Icon type={CLASS_NAMES.shoppingCart} style={{ fontSize: "20px" }} />
    </div>
  );
};

export default ShoppingCart;
