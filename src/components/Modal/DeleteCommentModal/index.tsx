import { useContext } from 'react';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { TComment } from '../../../interfaces/comment.interfaces';
import { DivModalStyle } from '../DeleteAdModal/style';
import { StyledTexts } from '../../../styles/typography';
import { Button } from '../../Button';

export const DeleteCommentModal = ({
  comment,
  setIsConfirmDeleteCommentModalOpen,
}: {
  comment: TComment;
  setIsConfirmDeleteCommentModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const { deleteComment } = useContext(AnnouncementContext);

  const destroyComment = () => {
    deleteComment(comment.id);
    setIsConfirmDeleteCommentModalOpen(false);
  };

  return (
    <DivModalStyle role='dialog'>
      <div>
        <nav>
          <StyledTexts tag='h3' $fontSize='heading_500_16'>
            Excluir comentário
          </StyledTexts>
          <Button
            text='X'
            onClick={() => setIsConfirmDeleteCommentModalOpen(false)}
          />
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16'>
          Tem certeza que deseja remover este comentário?
        </StyledTexts>
        <StyledTexts tag='p' $fontSize='body_400_16'>
          {' '}
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          comentário.
        </StyledTexts>
        <section className='modal__buttons'>
          <Button
            text='Cancelar'
            className='cancel_button'
            onClick={() => setIsConfirmDeleteCommentModalOpen(false)}
          />
          <Button
            text='Sim, excluir comentário'
            className='delete_button'
            onClick={() => destroyComment()}
          />
        </section>
      </div>
    </DivModalStyle>
  );
};
