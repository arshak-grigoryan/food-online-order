import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, [children, el]);

  return ReactDOM.createPortal(children, el);
};

export default Modal;
