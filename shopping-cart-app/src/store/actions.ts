import { ICartInfo, IPhones } from '../typings'
import {
    INIT_CART_LIST,
    INIT_CART_LIST_TYPE,
    SET_CART_LIST,
    SET_CART_LIST_TYPE,
    SET_PHONE_LIST,
    SET_PHONE_LIST_TYPE
} from './actionTypes'

interface ISetPhoneList {
    type: SET_PHONE_LIST_TYPE;
    payload: IPhones[];
}

interface ISetCartList {
    type: SET_CART_LIST_TYPE;
    payload: ICartInfo;
}

interface IInitCartList {
    type: INIT_CART_LIST_TYPE;
    payload: ICartInfo[];
}

export type TAction = ISetPhoneList | ISetCartList | IInitCartList

export function setPhoneList(phoneList: IPhones[]): ISetPhoneList {
    return {
        type: SET_PHONE_LIST,
        payload: phoneList
    }
}

export function setCartList(cartInfo: ICartInfo): ISetCartList {
    return {
        type: SET_CART_LIST,
        payload: cartInfo
    }
}

export function initCartList(cartList: ICartInfo[]): IInitCartList {
    return {
        type: INIT_CART_LIST,
        payload: cartList
    }
}
