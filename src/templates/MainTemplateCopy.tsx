import { useState } from 'react';

import {
  Icon56MentionOutline,
  Icon56MessageReadOutline,
  Icon56UsersOutline
} from '@vkontakte/icons';
import {
  Avatar,
  Button,
  Cell,
  Group,
  Panel,
  PanelHeader,
  Placeholder,
  Platform,
  Separator,
  SplitCol,
  SplitLayout,
  View,
  useAdaptivityConditionalRender,
  usePlatform
} from '@vkontakte/vkui';

import { FilmCard } from '#entities/FilmCard/FilmCard';

const panels = ['panel 1', 'panel 2', 'panel 3'];

export const MainTemplate = () => {
  const platform = usePlatform();

  const { viewWidth } = useAdaptivityConditionalRender();
  const [panel, setPanel] = useState(panels[0]);
  const isVKCOM = platform === Platform.VKCOM;

  return (
    <SplitLayout
      style={{ justifyContent: 'center' }}
      header={!isVKCOM && <PanelHeader separator={false} />}
    >
      {viewWidth.tabletPlus && (
        <SplitCol
          className={viewWidth.tabletPlus.className}
          fixed
          width={280}
          maxWidth={280}
        >
          <Panel>
            {!isVKCOM && <PanelHeader>Разделы</PanelHeader>}
            <Group>
              {panels.map((i) => (
                <Cell
                  key={i}
                  disabled={i === panel}
                  style={
                    i === panel
                      ? {
                          backgroundColor:
                            'var(--vkui--color_background_secondary)',
                          borderRadius: 8
                        }
                      : {}
                  }
                  onClick={() => setPanel(i)}
                >
                  {i}
                </Cell>
              ))}
              <Separator />
              <Cell>modal 1</Cell>
              <Cell>modal 2</Cell>
              <Cell>alert</Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <View activePanel={panel}>
          <Panel id={panels[0]}>
            <PanelHeader after={<Avatar size={36} />}>Panel 1</PanelHeader>
            <Group>
              <Placeholder
                icon={<Icon56UsersOutline />}
                header="Уведомления от сообществ"
                action={<Button size="m">Подключить сообщества</Button>}
              >
                Подключите сообщества, от которых Вы хотите получать уведомления
              </Placeholder>
              <Separator />
              <Placeholder icon={<Icon56MentionOutline />}>
                Введите адрес страницы в поле поиска
              </Placeholder>
            </Group>
          </Panel>

          <Panel id={panels[1]}>
            <PanelHeader after={<Avatar size={36} />}>Panel 2</PanelHeader>
            <Group>
              <Placeholder>Доступ запрещён</Placeholder>
              <Separator />
              <FilmCard />
            </Group>
          </Panel>

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
