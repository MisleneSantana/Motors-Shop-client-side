import { createContext, useState } from 'react';

export interface IModalProviderProps {
  children: React.ReactNode;
}

export interface IModalContext {
  isSuccessModalOpen: boolean;
  setIsSuccessModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateAdsModalOpen: boolean;
  setIsCreateAdsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditOrDeleteAdsModalOpen: boolean;
  setIsEditOrDeleteAdsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isConfirmDeleteAdModalOpen: boolean;
  setIsConfirmDeleteAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCreateAccountModalOpen: boolean;
  setIsCreateAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isEditOrDeleteProfileModalOpen: boolean;
  setIsEditOrDeleteProfileModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isEditUserAddressModalOpen: boolean;
  setIsEditUserAddressModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isCreateAdsModalOpen, setIsCreateAdsModalOpen] =
    useState<boolean>(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isEditOrDeleteAdsModalOpen, setIsEditOrDeleteAdsModalOpen] =
    useState<boolean>(false);
  const [isConfirmDeleteAdModalOpen, setIsConfirmDeleteAdModalOpen] =
    useState<boolean>(false);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState<boolean>(false);
  const [isEditOrDeleteProfileModalOpen, setIsEditOrDeleteProfileModalOpen] =
    useState<boolean>(false);
  const [isEditUserAddressModalOpen, setIsEditUserAddressModalOpen] =
    useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isSuccessModalOpen,
        setIsSuccessModalOpen,
        isCreateAdsModalOpen,
        setIsCreateAdsModalOpen,
        isEditOrDeleteAdsModalOpen,
        setIsEditOrDeleteAdsModalOpen,
        isConfirmDeleteAdModalOpen,
        setIsConfirmDeleteAdModalOpen,
        isCreateAccountModalOpen,
        setIsCreateAccountModalOpen,
        isEditOrDeleteProfileModalOpen,
        setIsEditOrDeleteProfileModalOpen,
        isEditUserAddressModalOpen,
        setIsEditUserAddressModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
