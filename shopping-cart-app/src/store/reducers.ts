import { ICartInfo, IPhones, IState } from '../typings'
import { TAction } from './actions'
import { SET_CART_LIST, INIT_CART_LIST, SET_PHONE_LIST } from './actionTypes'
import initialState from './state'

function reducers(state: IState = initialState, action: TAction): IState {
    switch (action.type) {
        case SET_PHONE_LIST:
            return {
                ...state,
                phoneList: action.payload as IPhones[]
            }
        case SET_CART_LIST:
            return {
                ...state,
                cartList: [
                    ...state.cartList,
                    action.payload
                ] as ICartInfo[]
            }
        case INIT_CART_LIST:
            return {
                ...state,
                cartList: action.payload as ICartInfo[]
            }
        default:
            return state
    }
}

export default reducers