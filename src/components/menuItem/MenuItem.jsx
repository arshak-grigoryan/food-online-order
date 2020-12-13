import { useDispatch, } from 'react-redux';
import { CLASS_NAMES, } from '../../constants';
import { addCartItem, } from '../../store/actions';
import Icon from '../icon/Icon';
import './menuItem.scss';

const MenuItem = ({ id, ruiid, name, photoUrl, price, },) => {
  const dispatch = useDispatch();

  const onaddCartItemick = () => {
    dispatch(
      addCartItem({
        id,
        name,
        photoUrl,
        price,
        ruiid,
      },),
    );
  };

  return (
    <div className="menuItemWrapper">
      <div className="menuItem">
        <div
          className="photo"
          style={{
            backgroundImage: `url(${photoUrl})`,
          }}
        ></div>
        <h2>{name}</h2>
        <div className="priceCart">
          <div className="price">$ {price}</div>
          <div className="cart" onClick={onaddCartItemick}>
            <Icon type={CLASS_NAMES.shoppingCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
