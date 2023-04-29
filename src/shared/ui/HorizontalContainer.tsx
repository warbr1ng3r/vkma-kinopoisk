import { FC, PropsWithChildren } from 'react';

import { Div } from '@vkontakte/vkui';
import { Property } from 'csstype';

interface Props {
  justifyContent?: Property.JustifyContent;
}

export const HorizontalContainer: FC<PropsWithChildren<Props>> = ({
  children,
  justifyContent = 'center'
}) => {
  return (
    <Div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: `${justifyContent}`,
        alignItems: 'center'
      }}
    >
      {children}
    </Div>
  );
};
