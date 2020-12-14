import produce from 'immer';

import {
  ADD_RESTAURANTS,
  ADD_SEARCH_NAME,
  SELECT_CUISINE,
} from '../../constants';

import defaultState from './defaultState';

const otherReducer = produce((state = defaultState, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case ADD_RESTAURANTS:
      payload.restaurants.forEach((restaurant) => {
        state.restaurants.push(restaurant);
      });
      return state;
    case ADD_SEARCH_NAME:
      state.searchedName = payload.name.toLowerCase();
      return state;
    case SELECT_CUISINE:
      state.selectedCuisine = payload.cuisine;
      return state;
    default:
      return state;
  }
});

export default otherReducer;
