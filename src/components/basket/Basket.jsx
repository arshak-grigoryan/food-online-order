import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBasket, order, animateBasket, orderModalToggle } from "../../store/actions";
import {
  getBasket,
  getBasketVisibility,
} from "../../store/selectors";
import { CLASS_NAMES } from "../../constants";
import Icon from "../icon/Icon";
import BasketItem from "../basketItem/BasketItem";
import "./basket.scss";

const Basket = ({ style }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const { basket, basketVisibility } = useSelector(
    (state) => ({
      basket: getBasket(state),
      basketVisibility: getBasketVisibility(state),
    })
  );

  const onCloseBasketClick = () => {
    dispatch(animateBasket());
    setTimeout(() => dispatch(closeBasket()), 300);
  };

  useEffect(() => {
    if (basket) {
      let total = 0;
      basket.forEach(({ price, count }) => {
        total += price * count;
      });
      setTotalPrice(total);
    }
  }, [basket]);

  useEffect(() => {
    return () => {
        if(basketVisibility) {
            dispatch(closeBasket())
        }
    }
  },[dispatch, basketVisibility])

  const onOrderItems = () => {
    dispatch(order());
    dispatch(animateBasket());
    dispatch(closeBasket())
    dispatch(orderModalToggle())
    console.log("ordered");
  };
  const menu = document.querySelector('.restaurant')
  console.log(menu.getBoundingClientRect())
  return (
    <div className='basketRightWrapper' style={style}>
      <div className="basketRight">
        <div className="top">
          <div className="totalPrice">
            <h3>{totalPrice ? `Total $ ${totalPrice}` : "Cart is Empty"}</h3>
          </div>
          <div className="closeBasket" onClick={onCloseBasketClick}>
            <Icon type={CLASS_NAMES.close} />
          </div>
        </div>
        <div className="basketItems">
          {basket &&
            basket.map(({ ruiid, ...item }) => {
              return <BasketItem key={ruiid} ruiid={ruiid} {...item} />;
            })}
        </div>
        {totalPrice ? (
          <div className="order">
            <div onClick={onOrderItems}>Order</div>
          </div>
        ) : null}
      </div>  
    </div>

  );
};

export default Basket;
