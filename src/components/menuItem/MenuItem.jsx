import { useDispatch } from "react-redux";
import { CLASS_NAMES } from "../../constants";
import { addItemBasket } from "../../store/actions";
import Icon from "../icon/Icon";
import "./menuItem.scss";

const MenuItem = ({ id, ruiid, name, photoUrl, price, kitchenType }) => {
  const dispatch = useDispatch();

  const onAddItemBasketClick = () => {
    dispatch(addItemBasket({ id, name, photoUrl, price, ruiid }));
  };

  return (
    <div className="menuItemWrapper">
      <div className="menuItem">
        <div className='photo' style={{backgroundImage: `url(${photoUrl})`}}>
        </div>
        <h2>{name}</h2>
        {/* <div className='kitchenTypes'>
                    <div className='kitchenWrapper'>
                        <div className='kitchen'>{kitchenType}</div>
                    </div>
                </div> */}
        <div className="priceBasket">
          <div className="price">$ {price}</div>
          <div className="basket" onClick={onAddItemBasketClick}>
            <Icon type={CLASS_NAMES.shoppingCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
