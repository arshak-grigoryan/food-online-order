import React from "react";
import { useSelector } from "react-redux";
import { getOrderModalVisibility } from "./store/selectors";
import Router from "./components/router/Router";
import Modal from "./components/modal/Modal";
import Order from "./components/popup/order/Order";
import "./app.css";

const App = () => {
  const { isOrderModal } = useSelector((state) => ({
    isOrderModal: getOrderModalVisibility(state),
  }));

  return (
    <div className="app">
      <Router />
      <Modal>{isOrderModal && <Order />}</Modal>
    </div>
  );
};

export default App;
