import React, { FC, ReactElement, useCallback, useState } from 'react'
import { useHistory } from 'react-router'
import * as H from 'history'
import { IPhones } from '../../typings'

import Banner from './Banner'
import Title from './Title'
import Selector from '../Selector'
import Price from './Price'
import ColorGroup from './ColorGroup'
import VersionGroup from './VersionGroup'
import Bottom from './bottom'

import { useColor, useVersion } from './hooks'

import './index.scss'
import { useCartList, useSelectorCount } from '../../hooks'

interface IProps {
    phoneDetail: IPhones;
    cid: number;
    vid: number;
    totalCount: number;
}

const DetailPage: FC<IProps> = ({
    phoneDetail,
    totalCount,
    cid,
    vid
}): ReactElement => {
    const history: H.History = useHistory()

    const { name, color, version, limit } = phoneDetail
    const [ colorId, setColorId ] = useState<number>(cid)
    const [ versionId, setVersionId ] = useState<number>(vid)
    const currentColor = useColor(color, colorId)
    const currentVersion = useVersion(version, versionId)
    const [ count, setCurrentCount ] = useSelectorCount(totalCount, limit)
    const { setCartList } = useCartList(cid, vid, phoneDetail)

    const addToCart = useCallback(
        () => {
            setCartList(count)
            setTimeout(() => {
                history.push(`/cart`)
            }, 0)
        },
        [count, setCartList, history]
    )
    return (
        <div className="detail-wrapper">
            <Banner
                img={ currentColor.img }
                name={ name }
            />
            <div className="info-wrap">
                <Title
                    name={ name }
                    color={ currentColor.title }
                    version={ currentVersion.title }
                />
                <Price
                    limit={ limit }
                    price={ currentVersion.price }
                />
                <Selector
                    count={ count }
                    setCount={ setCurrentCount }
                />
                <ColorGroup
                    colorId={ colorId }
                    colors={ color }
                    setColorId={ setColorId }
                />
                <VersionGroup
                    versionId={ versionId }
                    versions={ version }
                    setVersionId={ setVersionId }
                />
            </div>
            <Bottom
                count={ count }
                price={ currentVersion.price }
                addToCart={ addToCart }
            />
        </div>
    )
}

export default DetailPage