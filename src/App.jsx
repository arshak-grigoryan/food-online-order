import React from "react";
import { useSelector } from "react-redux";
import { getIsOrderModal } from "./store/selectors";
import Router from "./components/router/Router";
import Modal from "./components/modal/Modal";
import Invoice from "./components/popup/invoice/Invoice";
import "./app.css";

const App = () => {
  const { isOrderModal } = useSelector((state) => ({
    isOrderModal: getIsOrderModal(state),
  }));

  return (
    <div className="app">
      <Router />
      <Modal>{isOrderModal && <Invoice />}</Modal>
    </div>
  );
};

export default App;
