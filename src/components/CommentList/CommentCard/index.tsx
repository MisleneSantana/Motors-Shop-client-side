import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { TCommentResponse } from '../../../interfaces/comment.interfaces';
import { UserContext } from '../../../providers/User/UserContext';
import { BoxButtonsStyle, CommentCardStyle, CommentOwnerStyle } from './style';
import { Button } from '../../Button';
import { commentDate } from './commentDate';
import { EditComment } from '../../Form/EditComment';
import { DeleteCommentModal } from '../../Modal/DeleteCommentModal';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface ICommentProps {
  comment: TCommentResponse;
}

export const CommentCard = ({ comment }: ICommentProps) => {
  const [isEditCommentModalOpen, setIsEditCommentModalOpen] =
    useState<boolean>(false);
  const [isConfirmDeleteCommentModalOpen, setIsConfirmDeleteCommentModalOpen] =
    useState<boolean>(false);
  const { user } = useContext(AuthContext);
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
            <FaEdit
              // text='Editar'
              onClick={() => setIsEditCommentModalOpen(true)}
            />
            <FaTrash
              className='delete-comment__button'
              // text='Excluir'
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
      {isConfirmDeleteCommentModalOpen ? (
        <DeleteCommentModal
          comment={comment}
          setIsConfirmDeleteCommentModalOpen={
            setIsConfirmDeleteCommentModalOpen
          }
        />
      ) : null}
    </>
  );
};
