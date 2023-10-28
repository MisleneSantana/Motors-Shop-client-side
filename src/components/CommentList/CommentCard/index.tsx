import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { TCommentResponse } from '../../../interfaces/comment.interfaces';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { UserContext } from '../../../providers/User/UserContext';
import { BoxButtonsStyle, CommentCardStyle, CommentOwnerStyle } from './style';
import { Button } from '../../Button';
import { commentDate } from './commentDate';
import { EditComment } from '../../Form/EditComment';

interface ICommentProps {
  comment: TCommentResponse;
}

export const CommentCard = ({ comment }: ICommentProps) => {
  const [isEditCommentModalOpen, setIsEditCommentModalOpen] =
    useState<boolean>(false);
  const { user } = useContext(AuthContext);
  const { setIsConfirmDeleteCommentModalOpen } = useContext(ModalContext);
  const { defineInitialsName } = useContext(UserContext);

  return (
    <>
      <CommentCardStyle>
        <CommentOwnerStyle>
          <span>{defineInitialsName(comment?.user?.name)}</span>
          <p>{comment?.user?.name}</p>
          <div>•</div>
          <p className='created-comment__p'>{`${commentDate(
            comment?.createdAt
          )}`}</p>
        </CommentOwnerStyle>

        <p className='comment__p'>{comment?.comment}</p>

        {user && comment?.user?.id === user.id && (
          <BoxButtonsStyle>
            <Button
              text='Editar'
              onClick={() => setIsEditCommentModalOpen(true)}
            />
            <Button
              className='delete-comment__button'
              text='Excluir'
              onClick={() => setIsConfirmDeleteCommentModalOpen(true)}
            />
          </BoxButtonsStyle>
        )}
      </CommentCardStyle>
      {isEditCommentModalOpen ? (
        <EditComment
          comment={comment}
          setIsEditCommentModalOpen={setIsEditCommentModalOpen}
        />
      ) : null}
    </>
  );
};
