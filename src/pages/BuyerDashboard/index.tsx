import { useContext } from 'react';
import { AnnouncementList } from '../../components/AnnouncementList';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SellerOrBuyerCard } from '../../components/SellerOrBuyerCard';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { EditOrDeleteProfileModal } from '../../components/Modal/EditOrDeleteProfileModal';
import { EditAddressModal } from '../../components/Modal/EditAddressModal';

export const BuyerDashboard = () => {
  const { isEditOrDeleteProfileModalOpen, isEditUserAddressModalOpen } =
    useContext(ModalContext);
  return (
    <>
      <Header />
      {isEditOrDeleteProfileModalOpen ? <EditOrDeleteProfileModal /> : null}
      {isEditUserAddressModalOpen ? <EditAddressModal /> : null}
      <main>
        <SellerOrBuyerCard />
        <AnnouncementList />
      </main>
      <Footer />
    </>
  );
};
