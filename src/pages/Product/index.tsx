import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { EditCommentModal } from '../../components/Modal/EditCommentModal';
import { useContext } from 'react';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { SpanBackgroundStyle } from '../BuyerDashboard/style';
import { ProductDetails } from '../../components/ProductDetails';

export const Product = () => {
  const { isEditCommentModalOpen, isConfirmDeleteCommentModalOpen } =
    useContext(ModalContext);

  return (
    <>
      <Header />
      <aside></aside>
      <main>
        <SpanBackgroundStyle></SpanBackgroundStyle>
        <ProductDetails />
        <section>
          {isEditCommentModalOpen ? <EditCommentModal /> : null}
          {/* {isConfirmDeleteCommentModalOpen ? <DeleteAdModal /> : null} */}
        </section>
      </main>
      <Footer />
    </>
  );
};
