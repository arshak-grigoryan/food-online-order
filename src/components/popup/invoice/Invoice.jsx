import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/selectors";
import { order, invoiceModalToggle } from "../../../store/actions";
import { MONTHS } from "../../../constants";
import "./invoice.scss";

const Invoice = () => {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [el, setEl] = useState();
  const [tableHeight, setTableHeight] = useState();

  const { cart } = useSelector((state) => ({
    cart: getCart(state),
  }));

  useEffect(() => {
    if (!el) {
      const el = document.getElementById("modalTable");
      setEl(el);
    } else {
      const height = el.getBoundingClientRect().height;
      setTableHeight(height);
    }
  }, [el]);

  useEffect(() => {
    let total = 0;
    cart.forEach(({ price, count }) => {
      total += price * count;
    });
    setTotalPrice(total);
  }, [cart]);

  const onCloseInvoiceClick = () => {
    dispatch(order());
    dispatch(invoiceModalToggle());
  };

  return (
    <div className="modalPopup">
      <div className="invoice">
        <div className="top">
          <div className="w">
            <span>{new Date().getHours()}:</span>
            <span>{new Date().getMinutes()}:</span>
            <span>{new Date().getSeconds()}</span>
            <span className="type">AM</span>
            {/* <span>{DAYS[new Date().getDay()]}</span> */}
          </div>
          <div className="dmy">
            <span>{new Date().getDate()}</span>
            <span>{MONTHS[new Date().getMonth()]}</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
        <h1>Invoice</h1>
        <div
          id="modalTable"
          className="table"
          style={{
            height:
              tableHeight > window.innerHeight / 2
                ? window.innerHeight / 2
                : tableHeight,
          }}
        >
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
              <tr key="total">
                <td></td>
                <td></td>
                <td></td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="buttons">
          <div className="closeInvoice" onClick={onCloseInvoiceClick}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
