import { useContext } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SpanBackgroundStyle } from '../BuyerDashboard/style';
import { AdDetails } from '../../components/AdDetails';
import { AdAside } from '../../components/AdAside';
import { AdMainStyle, SectionStyle } from './style';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { EditOrDeleteProfileModal } from '../../components/Modal/EditOrDeleteProfileModal';
import { EditAddressModal } from '../../components/Modal/EditAddressModal';

export const Ad = () => {
  const { isEditOrDeleteProfileModalOpen, isEditUserAddressModalOpen } =
    useContext(ModalContext);
  return (
    <>
      <Header />
      <AdMainStyle>
        <SpanBackgroundStyle></SpanBackgroundStyle>
        {isEditOrDeleteProfileModalOpen ? <EditOrDeleteProfileModal /> : null}
        {isEditUserAddressModalOpen ? <EditAddressModal /> : null}
        <SectionStyle>
          <AdDetails />
          <AdAside />
        </SectionStyle>
      </AdMainStyle>
      <Footer />
    </>
  );
};
