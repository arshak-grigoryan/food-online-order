import produce from 'immer';
import defaultState from './defaultState';
import {
    ADD_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    INCREASE_ITEM,
    DECREASE_ITEM,
    ADD_RESTAURANTS,
    ADD_SEARCH_NAME,
    SELECT_KITCHEN_TYPE
} from '../constants';

const shopReducer = produce((state = defaultState, actions) => {
    const { type, payload } = actions;

    if (!payload) return state;

    switch(type) {
        case ADD_ITEM_BASKET:
            return state
        case DELETE_ITEM_BASKET:
            return state
        case INCREASE_ITEM:
            return state
        case DECREASE_ITEM:
            return state
        case ADD_RESTAURANTS:
            payload.restaurants.forEach((restaurant) => {
                state.restaurants.push(restaurant)
            });
            return state
        case ADD_SEARCH_NAME:
            state.searchedName = payload.name.toLowerCase()
            return state
        case SELECT_KITCHEN_TYPE:
            state.selectedKitchenType = payload.kitchenType
            return state
        default:
            return state
    }
})

export default shopReducer