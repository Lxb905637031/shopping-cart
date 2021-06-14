import React, { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

interface IProps {
    headerTitle: string;
    iconShow: boolean;
}

const Header: FC<IProps> = ({
    headerTitle,
    iconShow
}):ReactElement => {
    return (
        <header className="header">
            <div className="back-icon">
                {
                    iconShow && 
                    <Link
                        to="/"
                        className="iconfont icon-arrow-right"
                    />
                }
            </div>
            <h1>{ headerTitle }</h1>
        </header>
    )
}

export default Header