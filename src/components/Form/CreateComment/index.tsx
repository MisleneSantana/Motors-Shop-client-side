import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { useForm } from 'react-hook-form';
import { TCommentRequest } from '../../../interfaces/comment.interfaces';
import { CommentSchema, TCommentFormSchema } from './comment.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { useParams } from 'react-router-dom';

export const CreateComment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);
  const { createComment } = useContext(AnnouncementContext);

  const formatInitialsLetter = (fullName: string) => {
    if (fullName) {
      fullName
        .split(' ')
        .map((letter: string, i: number) => {
          if (i === 0 || i === fullName.split(' ').length - 1) {
            return letter[0].toUpperCase();
          }
        })
        .join('');
      return fullName;
    }
    return null;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TCommentFormSchema>({ resolver: zodResolver(CommentSchema) });

  const submit = async (formData: TCommentRequest) => {
    const announcementId: string | undefined = id;
    if (announcementId) createComment(formData, announcementId);
    setValue('comment', '');
  };

  return (
    <div>
      {user ? (
        <div>
          <span>{`${formatInitialsLetter(user.name)}`}</span>
          <p>{user.name}</p>
        </div>
      ) : null}

      {user ? (
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <textarea
              id='comment'
              placeholder='Digitar comentário'
              rows={8}
              disabled={loading}
              {...register('comment')}
            ></textarea>
            {errors.comment?.message && <p>{errors.comment?.message}</p>}
          </div>
          {user ? (
            <button type='submit'>{loading ? 'Carregando' : 'Comentar'}</button>
          ) : (
            <button type='submit'>Comentar</button>
          )}
        </form>
      ) : (
        <p>Para realizar um comentário é necessário estar logado.</p>
      )}

      {user ? (
        <div>
          <span>Gostei muito!</span>
          <span>Incrível!</span>
          <span>Recomendarei para meus amigos!!</span>
        </div>
      ) : null}
    </div>
  );
};
