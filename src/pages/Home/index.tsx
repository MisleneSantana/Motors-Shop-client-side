import { AnnouncementList } from '../../components/AnnouncementList';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { BoxBackgroundStyle, BoxListStyle, HomeDivStyle, HomeMainStyle } from './style';

export const Home = () => {
  return (
    <>
      <HomeDivStyle>
        <Header />
        <HomeMainStyle>
          <BoxBackgroundStyle>
            <h1>Motors <strong>Shop</strong></h1>
            <p>A melhor plataforma de anúncios de carros do país</p>
          </BoxBackgroundStyle>
          <BoxListStyle>
            <AnnouncementList />
          </BoxListStyle>
        </HomeMainStyle>
        <Footer />
      </HomeDivStyle>
    </>
  );
};
