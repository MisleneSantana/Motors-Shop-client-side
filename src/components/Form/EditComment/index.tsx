import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import {
  CommentSchema,
  TCommentFormSchema,
} from '../CreateComment/comment.validator';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TComment,
  TCommentRequest,
} from '../../../interfaces/comment.interfaces';
import { ModelForm } from '../ModelForm';
import { DivModalStyle } from '../CreateAnnouncement/style';
import { TextareaStyle } from '../../Textarea/style';

export const EditComment = ({
  comment,
  setIsEditCommentModalOpen,
}: {
  comment: TComment;
  setIsEditCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);
  const { updateComment } = useContext(AnnouncementContext);

  const { register, handleSubmit, setValue } = useForm<TCommentFormSchema>({
    resolver: zodResolver(CommentSchema),
  });

  const submit: SubmitHandler<TCommentRequest> = (
    formData: TCommentRequest
  ) => {
    if (comment) updateComment(formData, comment.id);
    setIsEditCommentModalOpen(false);
    setValue('comment', '');
  };

  return (
    <>
      <DivModalStyle role='dialog'>
        {user ? (
          <ModelForm
            titleForm={'Editar comentário'}
            onSubmit={handleSubmit(submit)}
          >
            <nav>
              <button onClick={() => setIsEditCommentModalOpen(false)}>
                X
              </button>
            </nav>
            <div className='content__textarea'>
              <TextareaStyle
                id='comment'
                placeholder={comment.comment}
                disabled={loading}
                defaultValue={comment.comment}
                {...register('comment')}
              />
            </div>
            {user ? (
              <button type='submit'>{loading ? 'Carregando' : 'Editar'}</button>
            ) : (
              <button type='submit'>Editar</button>
            )}
          </ModelForm>
        ) : (
          <p>Para editar um comentário é necessário estar logado.</p>
        )}
      </DivModalStyle>
    </>
  );
};
