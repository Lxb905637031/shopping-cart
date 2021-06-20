import React, { FC, ReactElement } from 'react'
import { IPhoneColor } from '../../../typings'

interface IProps {
  colorId: number;
  colors: IPhoneColor[];
  setColorId: (id: number) => void;
}

const ColorGroup: FC<IProps> = ({
  colorId,
  colors,
  setColorId,
}): ReactElement => {
  return (
    <div className="btn-group">
    <h2>颜色选择：</h2>
    {
      colors && colors.map((color: IPhoneColor) => {
        return (
          <button
            className={ [ 'radio-btn', color.cid === colorId ? 'current' : '' ].join(' ') }
            key={ color.mark }
            onClick={ () => setColorId(color.cid) }
          >
            { color.title }
          </button>
        )
      })
    }
  </div>
  )
}

export default ColorGroup
