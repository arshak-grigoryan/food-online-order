import { OPEN_CART,
  CLOSE_CART,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  ADD_RESTAURANTS,
  ADD_SEARCH_NAME,
  SELECT_CUISINE,
  ORDER,
  CART_OPENING_ANIMATION,
  CART_CLOSING_ANIMATION,
  INVOICE_MODAL } from '../constants';

export const openCart = () => ({
  type: OPEN_CART,
});

export const closeCart = () => ({
  type: CLOSE_CART,
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: {
    item,
  },
});

export const deleteCartItem = (ruiid) => ({
  type: DELETE_CART_ITEM,
  payload: {
    ruiid,
  },
});

export const increaseCartItem = (ruiid) => ({
  type: INCREASE_CART_ITEM,
  payload: {
    ruiid,
  },
});

export const decreaseCartItem = (ruiid) => ({
  type: DECREASE_CART_ITEM,
  payload: {
    ruiid,
  },
});

export const addRestaurants = (restaurants) => ({
  type: ADD_RESTAURANTS,
  payload: {
    restaurants,
  },
});

export const addSearchName = (name) => ({
  type: ADD_SEARCH_NAME,
  payload: {
    name,
  },
});

export const selectCusine = (cuisine) => ({
  type: SELECT_CUISINE,
  payload: {
    cuisine,
  },
});

export const order = () => ({
  type: ORDER,
});

export const startCartOpeningAnimation = () => ({
  type: CART_OPENING_ANIMATION,
});

export const startCartClosingAnimation = () => ({
  type: CART_CLOSING_ANIMATION,
});

export const invoiceModalToggle = () => ({
  type: INVOICE_MODAL,
});
