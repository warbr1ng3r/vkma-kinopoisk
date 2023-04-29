import { useContext } from 'react';

import { ModalContext } from '#shared/modalContext/modalContext';

export const useModal = () => {
  const { activeModal, setActiveModal, currentSearchParam, setCurrentSearchParam } =
    useContext(ModalContext);
  return { activeModal, setActiveModal, currentSearchParam, setCurrentSearchParam };
};
