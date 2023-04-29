import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

interface ModalContextValue {
  activeModal: string | null;
  currentSearchParam: string | null;
  setCurrentSearchParam: Dispatch<SetStateAction<string | null>>;
  setActiveModal: Dispatch<SetStateAction<string | null>>;
}

export const ModalContext = createContext<ModalContextValue>({
  activeModal: null,
  currentSearchParam: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentSearchParam: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setActiveModal: () => {}
});

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [currentSearchParam, setCurrentSearchParam] = useState<string | null>(null);

  return (
    <ModalContext.Provider
      value={{ activeModal, setActiveModal, currentSearchParam, setCurrentSearchParam }}
    >
      {children}
    </ModalContext.Provider>
  );
};
