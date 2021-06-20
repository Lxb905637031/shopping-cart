import React, { FC, ReactElement } from 'react'

import './index.scss'

interface IProps {
    count: number;
    setCount: (type: COUNT_TYPE) => void
}

export enum COUNT_TYPE {
    PLUS = 'plus',
    MINUS = 'minus'
}

const Selector: FC<IProps> = ({
    count,
    setCount
  }): ReactElement => {
    return (
      <div className="selector">
        <h2>选择数量：</h2>
        <button onClick={ () => setCount(COUNT_TYPE.MINUS) }>-</button>
        <input type="number" readOnly value={ count || 0 }/>
        <button onClick={ () => setCount(COUNT_TYPE.PLUS) }>+</button>
      </div>
    )
  }

  export default Selector