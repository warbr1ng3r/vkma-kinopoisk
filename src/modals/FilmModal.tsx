import { FC } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
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
import { HorizontalContainer, VerticalContainer } from '#shared/ui';

interface Props {
  id: string;
  dataID?: string;
  onClose: () => void;
}

const FilmModal: FC<Props> = ({ id, dataID, onClose }) => {
  const platform = usePlatform();
  const { deviceType } = useAdaptivityConditionalRender();
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['modal', dataID],
    queryFn: async () => {
      const response = await fetchByID(dataID as string);
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  return (
    <ModalPage
      nav={id}
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
                <PanelHeaderButton onClick={onClose}>
                  <Icon24Done />
                </PanelHeaderButton>
              )}
              {platform === Platform.IOS && (
                <PanelHeaderButton onClick={onClose}>Готово</PanelHeaderButton>
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

export default FilmModal;