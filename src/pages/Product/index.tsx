import { CommentList } from '../../components/CommentList';
import { Footer } from '../../components/Footer';
import { CreateComment } from '../../components/Form/CreateComment';
import { Header } from '../../components/Header';
import { EditCommentModal } from '../../components/Modal/EditCommentModal';
import { useContext } from 'react';
import { ModalContext } from '../../providers/Modal/ModalContext';
import { DeleteAdModal } from '../../components/Modal/DeleteAdModal';

export const Product = () => {
  const { isEditCommentModalOpen, isConfirmDeleteCommentModalOpen } =
    useContext(ModalContext);
  return (
    <>
      <Header />
      <aside></aside>
      <main>
        <section>
          <CommentList />
        </section>
        <section>
          <CreateComment />
          {isEditCommentModalOpen ? <EditCommentModal /> : null}
          {isConfirmDeleteCommentModalOpen ? <DeleteAdModal /> : null}
        </section>
      </main>
      <Footer />
    </>
  );
};
