import { lazy } from 'react';
import { useSelector } from 'react-redux';

import { TRANSITION_TIME_MS, CART_WIDTH } from '../../../constants';
import { getIsCart, getisCartAnimating } from '../../../store/selectors';
import Restaurants from '../../restaurants/Restaurants';
import Header from '../../header/Header';
import './home.scss';

const Cart = lazy(() => import('../../cart/Cart'));

const Home = () => {
  const { isCart, isCartAnimating } = useSelector((state) => ({
    isCart: getIsCart(state),
    isCartAnimating: getisCartAnimating(state),
  }));

  return (
    <>
      <div
        className="home"
        style={{
          width: isCartAnimating ? `calc(100% - ${CART_WIDTH})` : '100%',
          transition: isCartAnimating ? `${TRANSITION_TIME_MS}ms` : '0',
        }}
      >
        <Header isSelectOptionExist={true} placeholder="Search Restaurants" />
        <Restaurants />
      </div>
      {isCart && (
        <Cart
          style={{
            right: isCartAnimating ? '0' : `-${CART_WIDTH}`,
          }}
        />
      )}
    </>
  );
};

export default Home;
