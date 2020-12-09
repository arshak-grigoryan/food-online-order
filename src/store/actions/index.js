import {
  OPEN_CART,
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
  INVOICE_MODAL,
} from "../constants";

export const openCart = () => {
  return {
    type: OPEN_CART,
  };
};

export const closeCart = () => {
  return {
    type: CLOSE_CART,
  };
};

export const addCartItem = (item) => {
  return {
    type: ADD_CART_ITEM,
    payload: {
      item,
    },
  };
};

export const deleteCartItem = (ruiid) => {
  return {
    type: DELETE_CART_ITEM,
    payload: { ruiid },
  };
};

export const increaseCartItem = (ruiid) => {
  return {
    type: INCREASE_CART_ITEM,
    payload: { ruiid },
  };
};

export const decreaseCartItem = (ruiid) => {
  return {
    type: DECREASE_CART_ITEM,
    payload: { ruiid },
  };
};

export const addRestaurants = (restaurants) => {
  return {
    type: ADD_RESTAURANTS,
    payload: { restaurants },
  };
};

export const addSearchName = (name) => {
  return {
    type: ADD_SEARCH_NAME,
    payload: { name },
  };
};

export const selectCusine = (cuisine) => {
  return {
    type: SELECT_CUISINE,
    payload: { cuisine },
  };
};

export const order = () => {
  return {
    type: ORDER,
  };
};

export const startCartOpeningAnimation = () => {
  return {
    type: CART_OPENING_ANIMATION,
  };
};

export const startCartClosingAnimation = () => {
  return {
    type: CART_CLOSING_ANIMATION,
  };
};

export const invoiceModalToggle = () => {
  return {
    type: INVOICE_MODAL,
  };
};
