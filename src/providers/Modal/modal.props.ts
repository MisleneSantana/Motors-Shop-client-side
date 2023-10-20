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
  isConfirmDeleteCommentModalOpen: boolean;
  setIsConfirmDeleteCommentModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  isEditCommentModalOpen: boolean;
  setIsEditCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
