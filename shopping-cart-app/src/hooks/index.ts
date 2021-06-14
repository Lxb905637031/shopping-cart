import { useEffect, useState } from 'react'
import { IFlatPhones, IPhoneColor, IPhones } from '../typings'
import { getPhones } from '../services'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { SET_PHONE_LIST } from '../store/actionTypes'

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