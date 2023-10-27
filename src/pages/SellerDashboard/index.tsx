import { useContext } from 'react';
import { Header } from '../../components/Header';
import { SellerOrBuyerCard } from '../../components/SellerOrBuyerCard';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { CreateAnnouncement } from '../../components/Form/CreateAnnouncement';
import { AnnouncementList } from '../../components/AnnouncementList';
import { Footer } from '../../components/Footer';
import { AdCreatedModal } from '../../components/Modal/AdCreatedModal';
import { EditOrDeleteProfileModal } from '../../components/Modal/EditOrDeleteProfileModal';
import { EditAddressModal } from '../../components/Modal/EditAddressModal';
import { SpanBackgroundStyle } from '../BuyerDashboard/style';
import { SellerDashboardDivStyle, SellerDashboardMainStyle } from './style';

export const SellerDashboard = () => {
  const {
    isEditOrDeleteProfileModalOpen,
    isEditUserAddressModalOpen,
    isCreateAdsModalOpen,
    isSuccessModalOpen,
  } = useContext(ModalContext);

  return (
    <>
      <SellerDashboardDivStyle>
        <Header />
        <SellerDashboardMainStyle>
        <SpanBackgroundStyle></SpanBackgroundStyle>
          {isEditOrDeleteProfileModalOpen ? <EditOrDeleteProfileModal /> : null}
          {isEditUserAddressModalOpen ? <EditAddressModal /> : null}
          <SellerOrBuyerCard />
          {isCreateAdsModalOpen ? <CreateAnnouncement /> : null}
          {isSuccessModalOpen ? <AdCreatedModal /> : null}
          <AnnouncementList />
        </SellerDashboardMainStyle>
        <Footer />
      </SellerDashboardDivStyle>
    </>
  );
};
