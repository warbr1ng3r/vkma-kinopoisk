import { FC, useEffect, useState } from 'react';

import { useLocation, useRouter } from '@happysanta/router';
import { useQuery } from '@tanstack/react-query';
import { Icon56SearchOutline } from '@vkontakte/icons';
import { Group, Panel, Placeholder, Search } from '@vkontakte/vkui';

import { fetchBySearchTerm } from '#shared/api/fetchers';
import { OMDbSearchItemResponse } from '#shared/api/types';
import { strBoolean } from '#shared/helpers/strBoolean';
import { useDebounce } from '#shared/helpers/useDebounce';
import { PAGE_SEARCH } from '#shared/routing/constants';
import { FilmCard } from '#shared/ui';
import { FilmCardGrid } from '#widgets/FilmCardGrid/FilmCardGrid';

interface Props {
  nav: string;
}

export const SearchFilmsPanel: FC<Props> = ({ nav }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 800);
  const router = useRouter();
  const { route } = useLocation();

  useEffect(() => {
    setSearchTerm(route.params.search || '');
  }, [route.params.search]);

  const { isLoading, isFetching, isError, data } = useQuery({
    queryKey: ['search', debouncedSearchTerm || 'c'],
    queryFn: async () => {
      if (debouncedSearchTerm) {
        const response = await fetchBySearchTerm(searchTerm);
        return response.data;
      }
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!debouncedSearchTerm,
    onSuccess: () =>
      debouncedSearchTerm !== route.params.search &&
      router.pushPage(PAGE_SEARCH, { search: debouncedSearchTerm })
  });

  return (
    <Panel nav={nav}>
      <Group>
        <Placeholder
          icon={<Icon56SearchOutline />}
          header="Введите название фильма"
          action={
            <Search
              style={{ maxWidth: '450px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          }
        >
          Введите название фильма и подождите
        </Placeholder>
        <FilmCardGrid
          size="s"
          justifyContent="left"
          isLoading={isLoading}
          isError={isError}
          isFetching={isFetching}
          errorData={!strBoolean(data?.Response) ? data?.Error : null}
        >
          {strBoolean(data?.Response) &&
            data?.Search.map((item) => (
              <FilmCard key={item.imdbID} data={item as OMDbSearchItemResponse} />
            ))}
        </FilmCardGrid>
      </Group>
    </Panel>
  );
};
