import { FC } from 'react';

import { useRouter } from '@happysanta/router';
import { ContentCard } from '@vkontakte/vkui';

import { OMDbSearchItemResponse } from '#shared/api/types';
import { MODAL_FILM_INFO } from '#shared/routing/constants';

interface Props {
  data: OMDbSearchItemResponse;
}

export const FilmCard: FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <ContentCard
      onClick={() => {
        router.pushModal(MODAL_FILM_INFO, { id: data.imdbID });
      }}
      srcSet={data.Poster}
      loading="lazy"
      alt="Picture of brown and gray mountains under blue sky during daytime photo"
      subtitle={data.Year + ' ' + data.Type}
      header={data.Title}
      text={data.imdbID}
      caption="Photo by Siyuan on Unsplash"
      maxHeight={350}
    />
  );
};
