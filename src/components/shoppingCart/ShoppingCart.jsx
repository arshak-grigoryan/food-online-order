import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCart, startCartOpeningAnimation } from '../../store/actions';
import { getCart } from '../../store/selectors';
import { CLASS_NAMES } from '../../constants';
import Icon from '../icon/Icon';
import './shoppingCart.scss';

const ShoppingCart = () => {
  const [leng, setLeng] = useState();

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => ({
    cart: getCart(state),
  }));

  useEffect(() => {
    let counter = 0;
    cart.forEach(({ count }) => {
      counter += count;
    });
    setLeng(counter);
  }, [cart]);

  const onOpenCartClick = () => {
    dispatch(openCart());
    setTimeout(() => dispatch(startCartOpeningAnimation()));
  };

  return leng ? (
    <div className="shoppingCart" onClick={onOpenCartClick}>
      <Icon
        type={CLASS_NAMES.shoppingCart}
        style={{
          fontSize: '20px',
        }}
      />
      <sup>{leng}</sup>
    </div>
  ) : null;
};

export default ShoppingCart;
