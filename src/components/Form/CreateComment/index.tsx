import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { useForm } from 'react-hook-form';
import { TCommentRequest } from '../../../interfaces/comment.interfaces';
import { CommentSchema, TCommentFormSchema } from './comment.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { UserContext } from '../../../providers/User/UserContext';
import { TextareaStyle } from '../../Textarea/style';
import { Button } from '../../Button';
import { ModelForm } from '../ModelForm';
import { BoxReactionsStyle, BoxUserInfosStyle, DivFormStyle } from './style';
import { TAnnouncement } from '../../../interfaces/announcement.interfaces';

interface ISingleAnnouncementProps {
  singleAnnouncement: TAnnouncement;
}

export const CreateComment = ({
  singleAnnouncement,
}: ISingleAnnouncementProps) => {
  const { user } = useContext(AuthContext);
  const { defineInitialsName } = useContext(UserContext);
  const { loading } = useContext(LoadingContext);
  const { createComment } = useContext(AnnouncementContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TCommentFormSchema>({ resolver: zodResolver(CommentSchema) });

  const submit = async (formData: TCommentRequest) => {
    if (singleAnnouncement) createComment(formData, singleAnnouncement.id);
    setValue('comment', '');
  };

  return (
    <DivFormStyle>
      {user ? (
        <BoxUserInfosStyle>
          <span>{`${defineInitialsName(user?.name)}`}</span>
          <p>{user.name}</p>
        </BoxUserInfosStyle>
      ) : null}

      {user ? (
        <ModelForm titleForm='' onSubmit={handleSubmit(submit)}>
          <TextareaStyle
            id='comment'
            placeholder='Digitar comentário'
            disabled={loading}
            {...register('comment')}
          />
          {errors.comment?.message && <p>{errors.comment?.message}</p>}
          {user ? (
            <Button text={loading ? 'Carregando' : 'Comentar'} type='submit' />
          ) : (
            <Button text={'Comentar'} type='submit' />
          )}
        </ModelForm>
      ) : (
        <p>Para realizar um comentário é necessário estar logado.</p>
      )}

      {user ? (
        <BoxReactionsStyle>
          <span>Gostei muito!</span>
          <span>Incrível!</span>
          <span>Recomendarei para meus amigos!!</span>
        </BoxReactionsStyle>
      ) : null}
    </DivFormStyle>
  );
};
