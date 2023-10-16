import { createContext, useState } from 'react';

export interface IModalProviderProps {
  children: React.ReactNode;
}

export interface IModalContext {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
