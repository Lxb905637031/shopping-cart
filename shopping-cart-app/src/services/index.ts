import axios from '../libs/http'

function getPhones<T>(): Promise<T> {
    return axios.get<T, T>('/phones').then((data: T) => {
        return data
    }).catch((err) => {
        throw new Error('Request failed ' + err)
    })
}

export {
    getPhones
}