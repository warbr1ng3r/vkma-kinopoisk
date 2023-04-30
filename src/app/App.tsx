import { useEffect } from 'react';

import { RouterContext } from '@happysanta/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, AppRoot, ConfigProvider, Platform } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { MainLayout } from '#layouts/MainLayout';
import { ModalContextProvider } from '#shared/modalContext';
import { PAGE_RANDOM } from '#shared/routing/constants';

import './App.css';
import { router } from './router';

export const App = () => {
  useEffect(() => {
    bridge.send('VKWebAppInit');
    router.replacePage(PAGE_RANDOM);
  }, []);

  const queryClient = new QueryClient();

  return (
    <RouterContext.Provider value={router}>
      <ConfigProvider platform={Platform.ANDROID}>
        <AdaptivityProvider>
          <AppRoot>
            <QueryClientProvider client={queryClient}>
              <ModalContextProvider>
                <MainLayout />
              </ModalContextProvider>
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </RouterContext.Provider>
  );
};
