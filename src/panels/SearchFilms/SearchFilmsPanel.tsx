import { FC, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Icon56SearchOutline } from '@vkontakte/icons';
import { Group, Panel, Placeholder, Search } from '@vkontakte/vkui';

import { fetchBySearchTerm } from '#shared/api/fetchers';
import { OMDbSearchItemResponse } from '#shared/api/types';
import { useDebounce } from '#shared/helpers/useDebounce';
import { FilmCard } from '#shared/ui';
import { FilmCardGrid } from '#widgets/FilmCardGrid/FilmCardGrid';

interface Props {
  id: string;
}

export const SearchFilmsPanel: FC<Props> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 800);

  const { isLoading, isFetching, isError, data, error } = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: async () => {
      if (debouncedSearchTerm) {
        const response = await fetchBySearchTerm(searchTerm);
        return response.data;
      }
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: !!searchTerm
  });

  return (
    <Panel id={id}>
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
        />
        <FilmCardGrid
          size="s"
          justifyContent="left"
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
        >
          {data?.Search.map((item) => (
            <FilmCard key={item.imdbID} data={item as OMDbSearchItemResponse} />
          ))}
        </FilmCardGrid>
      </Group>
    </Panel>
  );
};
