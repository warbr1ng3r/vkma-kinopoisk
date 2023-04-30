import { FC } from 'react';

import { useLocation, useRouter } from '@happysanta/router';
import { Cell, Group, Header, Panel, Separator } from '@vkontakte/vkui';

import { PAGE_RANDOM, PAGE_SEARCH } from '#shared/routing/constants';

export const NavBar: FC = () => {
  const location = useLocation();
  const router = useRouter();

  return (
    <Panel>
      <Group>
        <Header size="large">Навигация</Header>
        <Separator />
        <Cell
          disabled={location.getPageId() === PAGE_RANDOM}
          style={
            location.getPageId() === PAGE_RANDOM
              ? {
                  backgroundColor: 'var(--vkui--color_background_secondary)',
                  borderRadius: 8
                }
              : {}
          }
          onClick={() => router.pushPage(PAGE_RANDOM)}
        >
          Случайный фильм
        </Cell>
        <Cell
          disabled={location.getPageId() === PAGE_SEARCH}
          style={
            location.getPageId() === PAGE_SEARCH
              ? {
                  backgroundColor: 'var(--vkui--color_background_secondary)',
                  borderRadius: 8
                }
              : {}
          }
          onClick={() => router.pushPage(PAGE_SEARCH)}
        >
          Поиск фильма
        </Cell>
        <Separator />
        <Cell>Библиотека</Cell>
      </Group>
    </Panel>
  );
};
