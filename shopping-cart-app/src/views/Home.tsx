import React, { FC, ReactElement } from 'react'
import Header from '../components/Header'
import PhoneList from '../components/PhoneList'
import { usePhoneList } from '../hooks'

interface IProps {}

const Home: FC<IProps> = (): ReactElement => {
    const phoneList = usePhoneList()
    return (
        <div className="container">
           <Header
                headerTitle="ๅๅๅ่กจ"
                iconShow={ false }
           />
           {
               phoneList && phoneList.length &&
               <PhoneList
                    phoneList={ phoneList }
               />
           }
        </div>
    )
}

export default Home