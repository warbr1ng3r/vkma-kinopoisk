import { FC } from 'react';

import { useParams } from '@happysanta/router';
import { useQuery } from '@tanstack/react-query';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import {
  Footer,
  Footnote,
  Headline,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  Platform,
  Text,
  useAdaptivityConditionalRender,
  usePlatform
} from '@vkontakte/vkui';

import { fetchByID } from '#shared/api/fetchers';
import { FilterNA } from '#shared/helpers/FilterNA';
import { MODAL_CHOICE } from '#shared/routing/constants';
import { HorizontalContainer, VerticalContainer } from '#shared/ui';

import { router } from '../app/router';

interface Props {
  nav: string;
  onClose: () => void;
}

export const FilmModal: FC<Props> = ({ nav, onClose }) => {
  const platform = usePlatform();
  const { id } = useParams();
  const { deviceType } = useAdaptivityConditionalRender();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['modal', id],
    queryFn: async () => {
      const response = await fetchByID(id);
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  return (
    <ModalPage
      nav={nav}
      header={
        <ModalPageHeader
          before={
            (platform === Platform.ANDROID || platform === Platform.VKCOM) &&
            deviceType.mobile && (
              <PanelHeaderButton className={deviceType.mobile.className} onClick={onClose}>
                <Icon24Cancel />
              </PanelHeaderButton>
            )
          }
          after={
            <>
              {(platform === Platform.ANDROID || platform === Platform.VKCOM) && (
                <PanelHeaderButton onClick={() => router.pushModal(MODAL_CHOICE)}>
                  <Icon24Done />
                </PanelHeaderButton>
              )}
              {platform === Platform.IOS && (
                <PanelHeaderButton onClick={() => router.pushModal(MODAL_CHOICE)}>
                  Готово
                </PanelHeaderButton>
              )}
            </>
          }
        >
          {data?.Title}
        </ModalPageHeader>
      }
    >
      <HorizontalContainer>
        <img src={data?.Poster} alt={data?.Title} />
        <VerticalContainer>
          <Headline>{`Year: ${FilterNA(data?.Year)}`}</Headline>
          <Headline>{`Genre: ${FilterNA(data?.Genre)}`}</Headline>
          <Headline>{`Country: ${FilterNA(data?.Country)}`}</Headline>
        </VerticalContainer>
        <Text>{FilterNA(data?.Plot)}</Text>
        <Footer>
          <Footnote>{`imdbRating: ${FilterNA(data?.imdbRating)}`}</Footnote>
          <Footnote>{`imdbVotes: ${FilterNA(data?.imdbVotes)}`}</Footnote>
          <Footnote>{`Metascore: ${FilterNA(data?.Metascore)}`}</Footnote>
        </Footer>
      </HorizontalContainer>
    </ModalPage>
  );
};
