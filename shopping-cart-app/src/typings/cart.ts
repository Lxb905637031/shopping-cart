import { IPhones } from './phone'

interface ICartInfo extends IPhones {
    cid: number;
    vid: number;
    count: number;
    cartId: number;
}

export type {
    ICartInfo
}