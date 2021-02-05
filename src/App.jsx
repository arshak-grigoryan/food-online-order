import React from 'react';
import { useSelector } from 'react-redux';

import { getIsInvoiceModal } from './store/selectors';
import Router from './components/router/Router';
import Modal from './components/modal/Modal';
import Order from './components/popup/order/Order';
import './app.css';

const App = () => {
  const { isInvoiceModal } = useSelector((state) => ({
    isInvoiceModal: getIsInvoiceModal(state),
  }));

  return (
    <div className="app">
      <Router />
      <Modal>{isInvoiceModal && <Order />}</Modal>
    </div>
  );
};

export default App;
