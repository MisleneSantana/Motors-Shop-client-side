import { useContext } from 'react';
import { Header } from '../../components/Header';
import { SellerOrBuyerCard } from '../../components/SellerOrBuyerCard';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { CreateAnnouncement } from '../../components/Form/CreateAnnouncement';
import { AnnouncementList } from '../../components/AnnouncementList';
import { Footer } from '../../components/Footer';
import { EditOrDeleteAnnouncement } from '../../components/Form/EditOrDeleteAnnouncement';
import { AdCreatedModal } from '../../components/Modal/AdCreatedModal';
import { DeleteAdModal } from '../../components/Modal/DeleteAdModal';
import { EditOrDeleteProfileModal } from '../../components/Modal/EditOrDeleteProfileModal';
import { EditAddressModal } from '../../components/Modal/EditAddressModal';

export const SellerDashboard = () => {
  const {
    isEditOrDeleteProfileModalOpen,
    isEditUserAddressModalOpen,
    isCreateAdsModalOpen,
    isSuccessModalOpen,
    isEditOrDeleteAdsModalOpen,
    isConfirmDeleteAdModalOpen,
  } = useContext(ModalContext);

  return (
    <>
      <Header />
      {isEditOrDeleteProfileModalOpen ? <EditOrDeleteProfileModal /> : null}
      {isEditUserAddressModalOpen ? <EditAddressModal /> : null}
      <main>
        <SellerOrBuyerCard />
        {isCreateAdsModalOpen ? <CreateAnnouncement /> : null}
        {isSuccessModalOpen ? <AdCreatedModal /> : null}
        <AnnouncementList />
        {isEditOrDeleteAdsModalOpen ? <EditOrDeleteAnnouncement /> : null}
        {isConfirmDeleteAdModalOpen ? <DeleteAdModal /> : null}
      </main>
      <Footer />
    </>
  );
};
