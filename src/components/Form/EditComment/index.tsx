import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import {
  CommentSchema,
  TCommentFormSchema,
} from '../CreateComment/comment.validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TCommentRequest } from '../../../interfaces/comment.interfaces';
import { ModalContext } from '../../../providers/Modal/ModalContext';

export const EditComment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);
  const { updateComment } = useContext(AnnouncementContext);
  const { setIsEditCommentModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TCommentFormSchema>({ resolver: zodResolver(CommentSchema) });

  const submit: SubmitHandler<TCommentRequest> = (
    formData: TCommentRequest
  ) => {
    const commentId: string | undefined = id;
    if (commentId) updateComment(formData.comment, commentId);
    setIsEditCommentModalOpen(false);
    setValue('comment', '');
  };

  return (
    <>
      <nav>
        <h2>Editar comentário</h2>
        <button onClick={() => setIsEditCommentModalOpen(false)}>X</button>
      </nav>
      {user ? (
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <textarea
              id='comment'
              placeholder={'Old comment'}
              rows={8}
              disabled={loading}
              {...register('comment')}
            ></textarea>
            {errors.comment?.message && <p>{errors.comment?.message}</p>}
          </div>
          {user ? (
            <button type='submit'>{loading ? 'Carregando' : 'Editar'}</button>
          ) : (
            <button type='submit'>Editar</button>
          )}
        </form>
      ) : (
        <p>Para editar um comentário é necessário estar logado.</p>
      )}
      {user ? (
        <div>
          <span>Gostei muito!</span>
          <span>Incrível!</span>
          <span>Recomendarei para meus amigos!!</span>
        </div>
      ) : null}
    </>
  );
};
