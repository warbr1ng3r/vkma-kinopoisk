import { useEffect } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, AppRoot, ConfigProvider, Platform } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { MainLayout } from '#layouts/MainLayout';
import { ModalContextProvider } from '#shared/modalContext';

import './App.css';

export const App = () => {
  useEffect(() => {
    bridge.send('VKWebAppInit');
  }, []);

  const queryClient = new QueryClient();

  return (
    <ConfigProvider platform={Platform.ANDROID}>
      <AdaptivityProvider>
        <AppRoot mode="full">
          <QueryClientProvider client={queryClient}>
            <ModalContextProvider>
              <MainLayout />
            </ModalContextProvider>
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
