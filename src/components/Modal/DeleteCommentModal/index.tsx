import { useContext } from 'react';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';

export const DeleteCommentModal = () => {
  const { setIsConfirmDeleteCommentModalOpen } = useContext(ModalContext);
  const { deleteComment } = useContext(AnnouncementContext);

  const destroyComment = () => {
    deleteComment(comment.id);
    setIsConfirmDeleteCommentModalOpen(false);
  };

  return (
    <div role='dialog'>
      <nav>
        <h2>Excluir comentário</h2>
        <button onClick={() => setIsConfirmDeleteCommentModalOpen(false)}>
          X
        </button>
      </nav>
      <h3>Tem certeza que deseja remover este comentário?</h3>
      <p>
        {' '}
        Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
        comentário.
      </p>
      <div>
        <button onClick={() => setIsConfirmDeleteCommentModalOpen(false)}>
          Cancelar
        </button>
        <button onClick={() => destroyComment()}>
          Sim, excluir comentário
        </button>
      </div>
    </div>
  );
};
