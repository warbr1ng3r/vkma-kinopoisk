import React, { FC, PropsWithChildren } from 'react';

import { Card, CardGrid, Div, Headline, Spinner } from '@vkontakte/vkui';
import { Property } from 'csstype';

interface Props {
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  errorData?: string | null;
  justifyContent?: Property.JustifyContent;
  size?: 's' | 'm' | 'l';
}

export const FilmCardGrid: FC<PropsWithChildren<Props>> = ({
  isFetching,
  isError,
  isLoading,
  children,
  errorData,
  justifyContent = 'left',
  size = 'l'
}) => {
  if (isError) {
    return (
      <Div>
        <Headline>Что-то пошло не так</Headline>
      </Div>
    );
  }
  if (errorData) {
    return (
      <Div>
        <Headline>{errorData}</Headline>
      </Div>
    );
  }
  if (isLoading && !isFetching) {
    return null;
  }
  if (isLoading && isFetching) {
    return (
      <Card>
        <Spinner
          style={{ display: 'flex', justifyContent: 'center', height: '400px' }}
          size="large"
        />
      </Card>
    );
  }
  return (
    <CardGrid size={size} spaced style={{ display: 'flex', justifyContent: justifyContent }}>
      {children}
    </CardGrid>
  );
};
