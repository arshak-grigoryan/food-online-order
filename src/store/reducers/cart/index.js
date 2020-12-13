import produce from 'immer';
import defaultState from './defaultState';
import { OPEN_CART,
  CLOSE_CART,
  CART_OPENING_ANIMATION,
  CART_CLOSING_ANIMATION,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  ORDER,
  INVOICE_MODAL } from '../../constants';

const cartReducer = produce((state = defaultState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case OPEN_CART:
      state.isCart = true;
      return state;
    case CLOSE_CART:
      state.isCart = false;
      return state;
    case CART_OPENING_ANIMATION:
      state.isCartAnimating = true;
      return state;
    case CART_CLOSING_ANIMATION:
      state.isCartAnimating = false;
      return state;
    case ADD_CART_ITEM: {
      const isExist = state.cart.find(
        (item) => item.ruiid === payload.item.ruiid
      );
      if (isExist) {
        state.cart.forEach((item) => {
          if (item.ruiid === payload.item.ruiid) {
            item = {
              ...item,
              count: item.count++,
            };
          }
        });
      } else {
        state.cart.push({
          ...payload.item,
          ruiid: payload.item.ruiid,
          count: 1,
        });
      }
      return state;
    }
    case DELETE_CART_ITEM:
      state.cart.forEach((item, i) => {
        if (item.ruiid === payload.ruiid) {
          state.cart.splice(i, 1);
        }
      });
      return state;
    case INCREASE_CART_ITEM:
      state.cart.forEach((item) => {
        if (item.ruiid === payload.ruiid) {
          item = {
            ...item,
            count: item.count++,
          };
        }
      });
      return state;
    case DECREASE_CART_ITEM:
      state.cart.forEach((item, i) => {
        if (item.ruiid === payload.ruiid) {
          if (item.count > 1) {
            item = {
              ...item,
              count: item.count--,
            };
          } else {
            state.cart.splice(i, 1);
          }
        }
      });
      return state;
    case ORDER:
      state.cart = [];
      return state;
    case INVOICE_MODAL:
      state.isInvoiceModal = !state.isInvoiceModal;
      return state;
    default:
      return state;
  }
});

export default cartReducer;
