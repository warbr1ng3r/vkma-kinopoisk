import { FC } from 'react';

import { ContentCard } from '@vkontakte/vkui';

import { OMDbSearchItemResponse } from '#shared/api/types';
import { useModal } from '#shared/modalContext';

interface Props {
  data: OMDbSearchItemResponse;
}

export const FilmCard: FC<Props> = ({ data }) => {
  const { setActiveModal, setCurrentSearchParam } = useModal();

  return (
    <ContentCard
      onClick={() => {
        setActiveModal('MODAL_FILM_INFO');
        setCurrentSearchParam(data.imdbID);
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
