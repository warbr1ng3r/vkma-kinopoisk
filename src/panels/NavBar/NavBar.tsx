import React, { FC } from 'react';

import {
  Cell,
  Group,
  Header,
  Panel,
  PanelHeader,
  Separator,
  useAdaptivityConditionalRender
} from '@vkontakte/vkui';

interface Props {
  activePanel: string;
  panels: string[];
  onClick: (i: string) => void;
}

export const NavBar: FC<Props> = ({ activePanel, panels, onClick }) => {
  console.log(useAdaptivityConditionalRender());
  return (
    <Panel>
      <Group>
        <Header size="large">Навигация</Header>
        <Separator />
        {panels.map((i) => (
          <Cell
            key={i}
            disabled={i === activePanel}
            style={
              i === activePanel
                ? {
                    backgroundColor: 'var(--vkui--color_background_secondary)',
                    borderRadius: 8
                  }
                : {}
            }
            onClick={() => onClick(i)}
          >
            {i}
          </Cell>
        ))}
        <Separator />
        <Cell>Библиотека</Cell>
      </Group>
    </Panel>
  );
};
