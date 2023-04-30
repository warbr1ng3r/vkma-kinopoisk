import { FC, useEffect, useState } from 'react';

import { useLocation, useRouter } from '@happysanta/router';
import { useQuery } from '@tanstack/react-query';
import { Icon56HelpOutline } from '@vkontakte/icons';
import { Button, Group, Panel, Placeholder } from '@vkontakte/vkui';

import { fetchByID } from '#shared/api/fetchers';
import { OMDbSearchItemResponse } from '#shared/api/types';
import { generateRandomID } from '#shared/helpers/generateRandomID';
import { strBoolean } from '#shared/helpers/strBoolean';
import { PAGE_RANDOM } from '#shared/routing/constants';
import { FilmCard } from '#shared/ui';
import { FilmCardGrid } from '#widgets/FilmCardGrid/FilmCardGrid';

interface Props {
  nav: string;
}

export const RandomFilmPanel: FC<Props> = ({ nav }) => {
  const router = useRouter();
  const { route } = useLocation();
  const [randomID, setRandomID] = useState('');

  useEffect(() => {
    setRandomID(route.params.id || '');
  }, [route.params.id]);

  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ['random', randomID],
    queryFn: async () => {
      const response = await fetchByID(randomID);
      return response.data;
    },
    enabled: !!randomID,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onSuccess: (data) =>
      data.imdbID !== route.params.id &&
      router.pushPage(PAGE_RANDOM, { id: data?.imdbID as string })
  });

  return (
    <Panel nav={nav}>
      <Group>
        <Placeholder
          icon={<Icon56HelpOutline />}
          header="Рандомайзер"
          action={
            <Button size="m" onClick={() => setRandomID(generateRandomID)}>
              Получить случайный фильм
            </Button>
          }
        >
          Нажмите на кнопку, если хотите получить случайный фильм
        </Placeholder>
        <FilmCardGrid
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          errorData={!strBoolean(data?.Response) ? data?.Error : null}
        >
          <FilmCard data={data as OMDbSearchItemResponse} />
        </FilmCardGrid>
      </Group>
    </Panel>
  );
};
