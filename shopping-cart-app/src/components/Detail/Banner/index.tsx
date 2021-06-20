import React, { FC, ReactElement } from 'react'

interface IProps {
    img: string;
    name: string;
}

const Banner: FC<IProps> = ({
    img,
    name
}): ReactElement => {
    return (
        <img
            src={ img }
            alt={ name }
        />
    )
}

export default Banner