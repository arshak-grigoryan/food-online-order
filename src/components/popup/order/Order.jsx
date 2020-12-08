import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/selectors";
import { order, orderModalToggle } from "../../../store/actions";
import "./order.scss";

const Order = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => ({
    cart: getCart(state),
  }));

  useEffect(() => {
    let total = 0;
    cart.forEach(({ price, count }) => {
      total += price * count;
    });
    setTotalPrice(total);
  }, [cart]);

  const onConfirmOrderClick = () => {
    dispatch(order());
    dispatch(orderModalToggle());
  };

  const onCancelOrderClick = () => {
    dispatch(orderModalToggle());
  };

  return (
    <div className="modalPopup">
      <div className="order">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price $</th>
                <th>Count</th>
                <th>Total $</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(({ ruiid, name, price, count }) => {
                return (
                  <tr key={ruiid}>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{count}</td>
                    <td>{price * count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="totalButtons">
          <div>Total Price $ {totalPrice}</div>
          <div className="buttons">
            <div onClick={onConfirmOrderClick}>Comfirm</div>
            <div onClick={onCancelOrderClick}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
