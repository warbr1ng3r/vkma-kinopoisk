import { FC } from 'react';

import { useLocation, useRouter } from '@happysanta/router';
import { ModalRoot as ModalRootVKUI } from '@vkontakte/vkui';

import { MODAL_FILM_INFO } from '#shared/routing/constants';

import { FilmModal } from './FilmModal';

export const ModalRoot: FC = () => {
  const router = useRouter();
  const location = useLocation();

  return (
    <ModalRootVKUI activeModal={location.getModalId()} onClose={() => router.popPage()}>
      <FilmModal nav={MODAL_FILM_INFO} onClose={() => router.popPage()} />
    </ModalRootVKUI>
  );
};
