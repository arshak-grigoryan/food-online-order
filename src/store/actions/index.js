import {
    OPEN_BASKET,
    CLOSE_BASKET,
    ADD_ITEM_BASKET,
    DELETE_ITEM_BASKET,
    INCREASE_ITEM,
    DECREASE_ITEM,
    ADD_RESTAURANTS,
    ADD_SEARCH_NAME,
    SELECT_KITCHEN_TYPE,
    ORDER,
} from '../constants';

export const openBasket = () => {
    return {
        type: OPEN_BASKET
    }
}

export const closeBasket = () => {
    return {
        type: CLOSE_BASKET
    }
}

export const addItemBasket = (item) => {
    return {
        type: ADD_ITEM_BASKET,
        payload: {
            item,
        }
    }
}

export const deleteItemBasket = (ruiid) => {
    return {
        type: DELETE_ITEM_BASKET,
        payload: { ruiid }
    }
}

export const increaseItem = (ruiid) => {
    return {
        type: INCREASE_ITEM,
        payload: { ruiid }
    }
}

export const decreaseItem = (ruiid) => {
    return {
        type: DECREASE_ITEM,
        payload: { ruiid }
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

export const order = () => {
    return {
        type: ORDER
    }
}