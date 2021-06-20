import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IFlatPhones, IPhoneColor, IPhoneVersion } from '../../typings/phone';

interface IProps {
  dataItem: IFlatPhones;
}

const PhoneItem: FC<IProps> = ({
  dataItem
}): ReactElement => {
  
  const {
    currentColor: {
      cid,
      img,
      title
    },
    id,
    name,
    color,
    version
  } = dataItem
  return (
    <div className="phone-item">
      <Link to={`/detail/${id}/${cid}/${version[0].vid}/1`}>
        <div className="img-wrap">
          <img src={ img } alt={ name } />
        </div>
        <div className="info-wrap">
          <h1 className="title">{ name + ' ' + title }</h1>
          <div className="badge-wrap color">
            {
              color.map((c: IPhoneColor, i: number) => {
                return (
                  <span className="badge" key={ i }>{ c.title }</span>
                );
              })
            }
          </div>
          <div className="badge-wrap">
            {
              version.map((v: IPhoneVersion, i: number) => {
                return (
                  <span className="badge" key={ i }>{ v.title }</span>
                );
              })
            }
          </div>
          <p className="price">{ `￥${version[0].price}起` }</p>
        </div>
      </Link>
    </div>
  );
}

export default PhoneItem;