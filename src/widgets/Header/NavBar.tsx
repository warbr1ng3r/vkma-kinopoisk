import { useState } from 'react';

import {
  Icon16Dropdown,
  Icon28AddOutline,
  Icon28CameraOutline
} from '@vkontakte/icons';
import {
  FixedLayout,
  PanelHeader,
  PanelHeaderButton,
  Tabs,
  TabsItem
} from '@vkontakte/vkui';

export const NavBar = () => {
  const [mode, setMode] = useState('all');
  const [menuOpened, setMenuOpened] = useState(false);
  const [selected, setSelected] = useState('news');

  return (
    <PanelHeader
      before={
        <PanelHeaderButton>
          <Icon28CameraOutline />
        </PanelHeaderButton>
      }
      after={
        <PanelHeaderButton>
          <Icon28AddOutline />
        </PanelHeaderButton>
      }
    >
      <DefaultInPanel
        selected={selected}
        setSelected={setSelected}
        menuOpened={menuOpened}
        onMenuClick={(opened: any) => {
          setMenuOpened((prevState) => (opened ? !prevState : false));
        }}
      />
    </PanelHeader>
  );
};

const DefaultInPanel = ({
  menuOpened,
  onMenuClick,
  selected,
  setSelected
}: any) => {
  return (
    <Tabs>
      <TabsItem
        after={
          <Icon16Dropdown
            style={{
              transform: `rotate(${menuOpened ? '180deg' : '0'})`
            }}
          />
        }
        selected={selected === 'news'}
        onClick={() => {
          if (selected === 'news') {
            onMenuClick(true);
          }
          setSelected('news');
        }}
        id="tab-news"
        aria-controls="tab-content-news"
      >
        Новости
      </TabsItem>
      <TabsItem
        selected={selected === 'recommendations'}
        onClick={() => {
          onMenuClick(false);
          setSelected('recommendations');
        }}
        id="tab-recommendations"
        aria-controls="tab-content-recommendations"
      >
        Интересное
      </TabsItem>
    </Tabs>
  );
};
