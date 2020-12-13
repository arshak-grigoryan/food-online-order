import { useDispatch } from 'react-redux';
import { CLASS_NAMES } from '../../constants';
import { deleteCartItem, decreaseCartItem, increaseCartItem } from '../../store/actions';
import Icon from '../icon/Icon';
import './cartItem.scss';

const CartItem = ({ id, name, photoUrl, price, count, ruiid }) => {
  const dispatch = useDispatch();

  const onCartItemDeleteClick = () => {
    dispatch(deleteCartItem(ruiid));
  };

  const onCartItemDecreaseClick = () => {
    dispatch(decreaseCartItem(ruiid));
  };

  const onCartItemIncreaseClick = () => {
    dispatch(increaseCartItem(ruiid));
  };

  return (
    <div className="cartItem">
      <div className="nameDeleteItem">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="deleteItem" onClick={onCartItemDeleteClick}>
          <Icon type={CLASS_NAMES.close} />
        </div>
      </div>
      <div className="wrapper">
        <div className="photo">
          <img src={photoUrl} alt="img" />
        </div>
        <div className="priceCounter">
          <div className="price">
            <h3>$ {price}</h3>
          </div>
          <div className="counter">
            <div className="decrease" onClick={onCartItemDecreaseClick}>
              <Icon type={CLASS_NAMES.minus} />
            </div>
            <div className="currentCount">
              <p>{count}</p>
            </div>
            <div className="increase" onClick={onCartItemIncreaseClick}>
              <Icon type={CLASS_NAMES.plus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
