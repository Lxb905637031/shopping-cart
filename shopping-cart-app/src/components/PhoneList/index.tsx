import React, { FC, ReactElement } from 'react';
import { useFlatPhoneList } from '../../hooks';
import { IPhones } from '../../typings';
import { IFlatPhones } from '../../typings/phone';

import PhoneItem from './Item';

import './index.scss';

interface IProps {
  phoneList: IPhones[];
}

const PhoneList: FC<IProps> = ({
  phoneList
}): ReactElement => {
  
  const flatPhoneList: IFlatPhones[] = useFlatPhoneList(phoneList);

  return (
    <div className="phone-list">
      {
        flatPhoneList.map((phone: IFlatPhones, index: number) => {
          return (
            <PhoneItem dataItem={ phone } key={ index } />
          );
        })
      }
    </div>
  );
}

export default PhoneList;