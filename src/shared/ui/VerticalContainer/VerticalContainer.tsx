import { FC, PropsWithChildren } from 'react';

import { Div } from '@vkontakte/vkui';
import { Property } from 'csstype';

import style from './VerticalContainer.module.css';

interface Props {
  justifyContent?: Property.JustifyContent;
}

export const VerticalContainer: FC<PropsWithChildren<Props>> = ({
  children,
  justifyContent = 'space-between'
}) => {
  return (
    <Div className={style.container} style={{ justifyContent: `${justifyContent}` }}>
      {children}
    </Div>
  );
};
