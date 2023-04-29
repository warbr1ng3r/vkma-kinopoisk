import { FC } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Icon56HelpOutline } from '@vkontakte/icons';
import { Button, Group, Panel, Placeholder } from '@vkontakte/vkui';

import { fetchByRandomID } from '#shared/api/fetchers';
import { OMDbSearchItemResponse } from '#shared/api/types';
import { FilmCard } from '#shared/ui';
import { FilmCardGrid } from '#widgets/FilmCardGrid/FilmCardGrid';

interface Props {
  id: string;
}

export const RandomFilmPanel: FC<Props> = ({ id }) => {
  const { isLoading, isFetching, isError, data, refetch } = useQuery({
    queryKey: ['random'],
    queryFn: async () => {
      const response = await fetchByRandomID();
      return response.data;
    },
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  return (
    <Panel id={id}>
      <Group>
        <Placeholder
          icon={<Icon56HelpOutline />}
          header="Рандомайзер"
          action={
            <Button size="m" onClick={() => refetch()}>
              Получить случайный фильм
            </Button>
          }
        >
          Нажмите на кнопку, если хотите получить случайный фильм
        </Placeholder>
        <FilmCardGrid isLoading={isLoading} isFetching={isFetching} isError={isError}>
          <FilmCard data={data as OMDbSearchItemResponse} />
        </FilmCardGrid>
      </Group>
    </Panel>
  );
};
