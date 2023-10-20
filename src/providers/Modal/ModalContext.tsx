import { createContext, useState } from 'react';
import { IModalContext, IModalProviderProps } from './modal.props';

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
  const [isConfirmDeleteCommentModalOpen, setIsConfirmDeleteCommentModalOpen] =
    useState<boolean>(false);
  const [isEditCommentModalOpen, setIsEditCommentModalOpen] =
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
        isConfirmDeleteCommentModalOpen,
        setIsConfirmDeleteCommentModalOpen,
        isEditCommentModalOpen,
        setIsEditCommentModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
