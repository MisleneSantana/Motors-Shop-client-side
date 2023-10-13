import { AnnouncementList } from '../../components/AnnouncementList';
import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Motors Shop</h2>
          <p>A melhor plataforma de anúncios de carros do país</p>
        </section>
        <section>
          <AnnouncementList />
        </section>
      </main>
    </>
  );
};
