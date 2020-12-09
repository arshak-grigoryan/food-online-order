import React from "react";
import { useSelector } from "react-redux";
import { getIsInvoiceModal } from "./store/selectors";
import Router from "./components/router/Router";
import Modal from "./components/modal/Modal";
import Invoice from "./components/popup/invoice/Invoice";
import "./app.css";

const App = () => {
  const { isInvoiceModal } = useSelector((state) => ({
    isInvoiceModal: getIsInvoiceModal(state),
  }));

  return (
    <div className="app">
      <Router />
      <Modal>{isInvoiceModal && <Invoice />}</Modal>
    </div>
  );
};

export default App;
