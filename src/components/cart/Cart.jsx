import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeCart,
  invoiceModalToggle,
  startCartClosingAnimation,
} from '../../store/actions';
import { getCart } from '../../store/selectors';
import { CART_WIDTH, CLASS_NAMES, TRANSITION_TIME_MS } from '../../constants';
import Icon from '../icon/Icon';
import CartItem from '../cartItem/CartItem';
import './cart.scss';

const Cart = ({ style }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => ({
    cart: getCart(state),
  }));

  const onCartCloseClick = () => {
    dispatch(startCartClosingAnimation());
    setTimeout(() => dispatch(closeCart()), TRANSITION_TIME_MS);
  };

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.forEach(({ price, count }) => {
        total += price * count;
      });
      setTotalPrice(total);
    }
  }, [cart]);

  useEffect(
    () => () => {
      dispatch(closeCart());
      dispatch(startCartClosingAnimation());
    },
    [dispatch]
  );

  const onOrderItems = () => {
    dispatch(startCartClosingAnimation());
    setTimeout(() => dispatch(closeCart()), TRANSITION_TIME_MS);
    dispatch(invoiceModalToggle());
  };

  return (
    <div
      className="cartRightWrapper"
      style={{
        ...style,
        width: CART_WIDTH,
        transition: `${TRANSITION_TIME_MS}ms`,
      }}
    >
      <div className="cartRight">
        <div className="top">
          <div className="totalPrice">
            <h3>{totalPrice ? `Total $ ${totalPrice}` : 'Cart is Empty'}</h3>
          </div>
          <div className="closeCart" onClick={onCartCloseClick}>
            <Icon type={CLASS_NAMES.close} />
          </div>
        </div>
        <div className="cartItems">
          {cart &&
            cart.map(({ ruiid, ...item }) => (
              <CartItem key={ruiid} ruiid={ruiid} {...item} />
            ))}
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

export default Cart;
