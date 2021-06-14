import React, { FC, ReactElement } from 'react'
import Header from '../components/Header'
interface IProps {}

const Deail: FC<IProps> = (): ReactElement => {
    return (
        <div className="container">
            <Header
                headerTitle="商品详情"
                iconShow={ true }
            />
        </div>
    )
}

export default Deail