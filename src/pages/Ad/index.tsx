import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SpanBackgroundStyle } from '../BuyerDashboard/style';
import { AdDetails } from '../../components/AdDetails';
import { AdAside } from '../../components/AdAside';
import { AdMainStyle, SectionStyle } from './style';

export const Ad = () => {
  return (
    <>
      <Header />
      <AdMainStyle>
        <SpanBackgroundStyle></SpanBackgroundStyle>
        <SectionStyle>
          <AdDetails />
          <AdAside />
        </SectionStyle>
      </AdMainStyle>
      <Footer />
    </>
  );
};
