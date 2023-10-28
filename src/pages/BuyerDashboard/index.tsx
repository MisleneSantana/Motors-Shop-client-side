import { useContext } from 'react';
import { AnnouncementList } from '../../components/AnnouncementList';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SellerOrBuyerCard } from '../../components/SellerOrBuyerCard';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { EditOrDeleteProfileModal } from '../../components/Modal/EditOrDeleteProfileModal';
import { EditAddressModal } from '../../components/Modal/EditAddressModal';
import {
  BuyerDashboardDivStyle,
  BuyerDashboardMainStyle,
  SpanBackgroundStyle,
} from './style';

export const BuyerDashboard = () => {
  const { isEditOrDeleteProfileModalOpen, isEditUserAddressModalOpen } =
    useContext(ModalContext);
  return (
    <>
      <BuyerDashboardDivStyle>
        <Header />
        <BuyerDashboardMainStyle>
          <SpanBackgroundStyle></SpanBackgroundStyle>
          {isEditOrDeleteProfileModalOpen ? <EditOrDeleteProfileModal /> : null}
          {isEditUserAddressModalOpen ? <EditAddressModal /> : null}
          <SellerOrBuyerCard />
          <AnnouncementList />
        </BuyerDashboardMainStyle>
        <Footer />
      </BuyerDashboardDivStyle>
    </>
  );
};
