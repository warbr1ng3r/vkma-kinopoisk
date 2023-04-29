import { memo, useState } from 'react';

import { Icon56MessageReadOutline } from '@vkontakte/icons';
import {
  Avatar,
  Button,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  SplitCol,
  SplitLayout,
  View,
  useAdaptivityConditionalRender,
  usePlatform
} from '@vkontakte/vkui';

import { ModalRoot } from '#modals/ModalRoot';
import { NavBar } from '#panels/NavBar';
import { RandomFilmPanel } from '#panels/RandomFilm/RandomFilmPanel';
import { SearchFilmsPanel } from '#panels/SearchFilms/SearchFilmsPanel';

const panels = ['panel 1', 'panel 2', 'panel 3'];

const MainLayoutInner = () => {
  const { deviceType } = useAdaptivityConditionalRender();
  const [panel, setPanel] = useState(panels[0]);

  return (
    <SplitLayout modal={<ModalRoot />} style={{ justifyContent: 'center' }}>
      {deviceType.desktop && (
        <SplitCol className={deviceType.desktop.className} autoSpaced width={280} maxWidth={280}>
          <NavBar onClick={setPanel} panels={panels} activePanel={panel} />
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="768px" autoSpaced>
        <View activePanel={panel}>
          <RandomFilmPanel id={panels[0]} />
          <SearchFilmsPanel id={panels[1]} />

          <Panel id={panels[2]}>
            <PanelHeader after={<Avatar size={36} />}>Panel 3</PanelHeader>
            <Group>
              <Placeholder
                icon={<Icon56MessageReadOutline />}
                action={
                  <Button size="m" mode="tertiary">
                    Показать все сообщения
                  </Button>
                }
              >
                Нет непрочитанных
                <br />
                сообщений
              </Placeholder>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

export const MainLayout = memo(MainLayoutInner);
