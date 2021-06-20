import React, { FC, ReactElement } from 'react'
import Header from '../components/Header'
import DetailPage from '../components/Detail'
import { useParams } from 'react-router'
import { usePhoneDetail } from '../hooks'
import { IPhones } from '../typings'

interface IProps {}

interface IUrlParams {
    id: string | undefined;
    cid: string | undefined;
    vid: string | undefined;
    count: string | undefined;
}

const Detail: FC<IProps> = (): ReactElement => {
    const { id, cid, vid, count }: IUrlParams = useParams()
    
    if (!id || !cid || !vid) {
        window.location.href = '/'
    }

    const phoneDetail:IPhones | undefined = usePhoneDetail(id!)
    
    if (!phoneDetail) {
        window.location.href = '/'
    }

    return (
        <div className="container">
            <Header
                headerTitle="商品详情"
                iconShow={ true }
            />
            {
                phoneDetail &&
                <DetailPage
                    phoneDetail={ phoneDetail }
                    cid={ parseInt(cid!) }
                    vid={ parseInt(vid!) }
                    totalCount={ parseInt(count!) }
                />
            }
        </div>
    )
}

export default Detail