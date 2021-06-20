import React, { FC, ReactElement } from 'react'

interface IProps {
    name: string;
    color: string;
    version: string;
}

const Title: FC<IProps> = ({
    name,
    color,
    version
}): ReactElement => {
    return (
        <h1 className="title">
        { `${name} ${color} ${version}` }
        </h1>
    )
}

export default Title