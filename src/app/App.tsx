import { useEffect, useState } from 'react';

import {
  Icon56MentionOutline,
  Icon56MessageReadOutline,
  Icon56UsersOutline
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import {
  AdaptivityProvider,
  AppRoot,
  Avatar,
  Button,
  Cell,
  ConfigProvider,
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
import '@vkontakte/vkui/dist/vkui.css';

import { FilmCard } from '#entities/FilmCard/FilmCard';
import { MainTemplate } from '#templates/MainTemplate';

import './App.css';

export const App = () => {
  useEffect(() => {
    bridge.send('VKWebAppInit');
  }, []);

  return (
    <ConfigProvider platform={Platform.ANDROID}>
      <AdaptivityProvider>
        <AppRoot>
          <MainTemplate />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
