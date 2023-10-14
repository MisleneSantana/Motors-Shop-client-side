import { createContext, useState } from 'react';

export interface IModalProviderProps {
  children: React.ReactNode;
}

export interface IModalContext {
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [showModal, setShowModal] = useState<string>('');

  const closeModal = () => {
    setShowModal('');
  };

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
