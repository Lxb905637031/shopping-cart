import { IPhones } from './phone'
import { ICartInfo } from './cart'

interface IState {
    phoneList: IPhones[];
    cartList: ICartInfo[];
}

export type {
    IState
}