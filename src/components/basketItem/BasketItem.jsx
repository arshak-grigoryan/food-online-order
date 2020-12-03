import { useDispatch } from "react-redux";
import { CLASS_NAMES } from "../../constants";
import {
  deleteItemBasket,
  decreaseItem,
  increaseItem,
} from "../../store/actions";
import Icon from "../icon/Icon";
import "./basketItem.scss";

const BasketItem = ({ id, name, photoUrl, price, count, ruiid }) => {
  const dispatch = useDispatch();

  const onBasketItemDeleteClick = () => {
    dispatch(deleteItemBasket(ruiid));
  };

  const onBasketItemDecreaseClick = () => {
    dispatch(decreaseItem(ruiid));
  };

  const onBasketItemIncreaseClick = () => {
    dispatch(increaseItem(ruiid));
  };

  return (
    <div className="basketItem">
      <div className="nameDeleteItem">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="deleteItem" onClick={onBasketItemDeleteClick}>
          <Icon type={CLASS_NAMES.close} />
        </div>
      </div>
      <div className="wrapper">
        <div className="photo">
          <img src={photoUrl} alt="img" />
        </div>
        <div className="priceCounter">
          <div className="price">
            <h3>{price}</h3>
          </div>
          <div className="counter">
            <div className="decrease" onClick={onBasketItemDecreaseClick}>
              <Icon type={CLASS_NAMES.minus} />
            </div>
            <div className="currentCount">
              <p>{count}</p>
            </div>
            <div className="increase" onClick={onBasketItemIncreaseClick}>
              <Icon type={CLASS_NAMES.plus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
