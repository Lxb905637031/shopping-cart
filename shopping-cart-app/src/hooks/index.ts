import { useEffect, useState } from 'react'
import { ICartInfo, IFlatPhones, IPhoneColor, IPhones, IState } from '../typings'
import { getPhones } from '../services'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { INIT_CART_LIST, SET_CART_LIST, SET_PHONE_LIST } from '../store/actionTypes'
import { COUNT_TYPE } from '../components/Selector'

export function usePhoneList(): IPhones[] {
    const [phoneList, setPhoneList] = useState<IPhones[]>([])
    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        try {
            getPhones<IPhones[]>().then((data) => {
                dispatch({
                    type: SET_PHONE_LIST,
                    payload: data
                })
                setPhoneList(data)
            })
        } catch(e) {
            console.log('Error: ' + e)
        }
    }, [dispatch])

    return phoneList
}

export function useFlatPhoneList(phoneList: IPhones[]): IFlatPhones[] {
    let flatPhoneList: IFlatPhones[] = []

    phoneList.map((phone: IPhones) => {
        phone.color.map((c: IPhoneColor) => {
            flatPhoneList.push({
                ...phone,
                currentColor: c
            })
            return c
        })
        return phone
    })
    return flatPhoneList
}

export function usePhoneDetail(id: string): IPhones | undefined {
    const phoneList = useSelector((state: IState) => state.phoneList)
    return phoneList.find((phone: IPhones) => phone.id === parseInt(id))
}

export function useSelectorCount(defaultCount: number, limt: number): [number, (type: COUNT_TYPE) => void] {
    const [ count, setCount ] = useState<number>(defaultCount)

    const setCurrentCount = function(type: COUNT_TYPE) {
        setCount((count: number) => {
            switch (type) {
                case COUNT_TYPE.MINUS:
                    if (count <= 1) {
                        return count
                    }
                return count - 1
                case COUNT_TYPE.PLUS:
                    if (count >= limt) {
                        return count
                    }
                return count + 1
                default:
                    return count
            }
        })
    }

    return [ count, setCurrentCount ]
}

export function useCartList(cid?: number, vid?: number, phoneDetail?:IPhones) {
    const cartList = useSelector((state:IState) => state.cartList)
    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        const _cartList = JSON.parse(localStorage.getItem('cartList') || '[]')
        dispatch({
            type: INIT_CART_LIST,
            payload: _cartList
        })
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList))
    }, [cartList])

    const setCartList = function (count: number) {
        if (cartList.length) {
            let totalCount: number = 0
            cartList.forEach((cartInfo: ICartInfo) => {
                if (cartInfo.id === phoneDetail!.id) {
                    totalCount += cartInfo.count
                }
            })

            if (phoneDetail!.limit - totalCount < count) {
                return
            }
        }
        dispatch({
            type: SET_CART_LIST,
            payload: {
                ...phoneDetail,
                cid,
                vid,
                count,
                cartId: new Date().getTime()
            }
        })
    }

    return {
        cartList,
        setCartList
    }
}

export function useDate (cartId: number): string {
    const date = new Date(cartId);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const i = date.getMinutes();
    const s = date.getSeconds();
  
    function _ (num: number): string {
      return num < 10 ? `0${num}` : `${num}`;
    }
  
    return `
      ${y}-${ _(m) }-${ _(d) } ${ _(h) }:${ _(i) }:${ _(s) };
    `
  }