const SET_PHONE_LIST: Symbol = Symbol()
const SET_CART_LIST: Symbol = Symbol()
const INIT_CART_LIST: Symbol = Symbol()

type SET_PHONE_LIST_TYPE = typeof SET_PHONE_LIST
type SET_CART_LIST_TYPE = typeof SET_CART_LIST
type INIT_CART_LIST_TYPE = typeof INIT_CART_LIST

export {
    SET_PHONE_LIST,
    SET_CART_LIST,
    INIT_CART_LIST
}

export type {
    SET_PHONE_LIST_TYPE,
    SET_CART_LIST_TYPE,
    INIT_CART_LIST_TYPE
}