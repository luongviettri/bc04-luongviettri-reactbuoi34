import { ADD_TO_CART, DELETE, DETAIL, QUANTITY_CHANGE } from "../Consts/BanGiayConsts";

export const actionDelete = (payload) => ({
    type: DELETE,
    payload
})
export const actionQuantityChange = (...payload) => ({
    type: QUANTITY_CHANGE,
    payload
})
export const actionDetailProduct = (payload) => ({
    type: DETAIL,
    payload
})
export const actionAddToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

