import React, { FC, ReactElement } from 'react'
import Header from '../components/Header'

interface IProps {}

const Cart: FC<IProps> = (): ReactElement => {
    return (
        <div className="container">
            <Header
                headerTitle="购物车"
                iconShow={ true }
            />
        </div>
    )
}

export default Cart