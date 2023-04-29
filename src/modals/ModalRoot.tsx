import { FC } from 'react';

import { ModalRoot as ModalRootVKUI } from '@vkontakte/vkui';

import { useModal } from '#shared/modalContext';

import FilmModal from './FilmModal';

export const ModalRoot: FC = () => {
  const { activeModal, setActiveModal, currentSearchParam } = useModal();
  return (
    <ModalRootVKUI activeModal={activeModal}>
      <FilmModal
        id="MODAL_FILM_INFO"
        dataID={currentSearchParam as string}
        onClose={() => setActiveModal(null)}
      />
    </ModalRootVKUI>
  );
};
