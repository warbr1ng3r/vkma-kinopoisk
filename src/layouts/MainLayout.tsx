import { memo } from 'react';

import { useLocation } from '@happysanta/router';
import { SplitCol, SplitLayout, View, useAdaptivityConditionalRender } from '@vkontakte/vkui';

import { ModalRoot } from '#modals/ModalRoot';
import { NavBar } from '#panels/NavBar';
import { RandomFilmPanel } from '#panels/RandomFilm/RandomFilmPanel';
import { SearchFilmsPanel } from '#panels/SearchFilms/SearchFilmsPanel';
import { PANEL_RANDOM, PANEL_SEARCH, VIEW_MAIN } from '#shared/routing/constants';

const MainLayoutInner = () => {
  const { deviceType } = useAdaptivityConditionalRender();
  const location = useLocation();

  return (
    <SplitLayout modal={<ModalRoot />} style={{ justifyContent: 'center' }}>
      {deviceType.desktop && (
        <SplitCol className={deviceType.desktop.className} autoSpaced width={280} maxWidth={280}>
          <NavBar />
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="768px" autoSpaced>
        <View activePanel={location.getViewActivePanel(VIEW_MAIN) as string}>
          <RandomFilmPanel nav={PANEL_RANDOM} />
          <SearchFilmsPanel nav={PANEL_SEARCH} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export const MainLayout = memo(MainLayoutInner);
