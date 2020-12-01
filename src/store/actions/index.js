import {
    ADD_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    INCREASE_ITEM,
    DECREASE_ITEM,
    ADD_RESTAURANTS,
    ADD_SEARCH_NAME,
    SELECT_KITCHEN_TYPE,
} from '../constants';

export const addItemBasket = () => {
    return {
        type: ADD_ITEM_BASKET,
    }
}

export const deleteItemBasket = () => {
    return {
        type: DELETE_ITEM_BASKET,
    }
}

export const increaseItem = () => {
    return {
        type: INCREASE_ITEM,
    }
}

export const decreaseItem = () => {
    return {
        type: DECREASE_ITEM,
    }
}

export const addRestaurants = (restaurants) => {
    return {
        type: ADD_RESTAURANTS,
        payload: { restaurants }
    }
}

export const addSearchName = (name) => {
    return {
        type: ADD_SEARCH_NAME,
        payload: { name }
    }
}

export const selectKitchenType = (kitchenType) => {
    return {
        type: SELECT_KITCHEN_TYPE,
        payload: { kitchenType }
    }
}