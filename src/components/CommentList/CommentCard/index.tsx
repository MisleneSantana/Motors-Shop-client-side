import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { TCommentResponse } from '../../../interfaces/comment.interfaces';
import { ModalContext } from '../../../providers/Modal/ModalContext';

interface ICommentProps {
  comment: TCommentResponse;
}

export const CommentCard = ({ comment }: ICommentProps) => {
  const { user } = useContext(AuthContext);
  const { setIsConfirmDeleteCommentModalOpen, setIsEditCommentModalOpen } =
    useContext(ModalContext);

  const formatInitialsLetter = (fullName: string) => {
    fullName
      .split(' ')
      .map((letter: string, i: number) => {
        if (i === 0 || i === fullName.split(' ').length - 1) {
          return letter[0].toUpperCase();
        }
      })
      .join('');
    return fullName;
  };

  return (
    <li>
      <div>
        <div>
          <span>{formatInitialsLetter(comment.user.name)}</span>
          <p>{comment.user.name}</p>
          <span>•</span>
          <p>{`${comment.createdAt}`}</p>
        </div>

        {user && comment.user.id === user.id && (
          <div>
            <button onClick={() => setIsEditCommentModalOpen(true)}>
              <img src='#' alt='edit' />
            </button>
            <button onClick={() => setIsConfirmDeleteCommentModalOpen(true)}>
              <img src='#' alt='trash' />
            </button>
          </div>
        )}
      </div>
      <p>{comment.comment}</p>
    </li>
  );
};
