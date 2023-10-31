import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { CommentCard } from './CommentCard';
import { CommentsBoxStyle, NoCommentsBoxStyle } from './style';
import { AuthContext } from '../../providers/Auth/AuthContext';

export const CommentList = () => {
  const userToken = localStorage.getItem('@user:token');
  const userId = localStorage.getItem('@user:id');
  const { user: userLogged } = useContext(AuthContext);
  const { comments } = useContext(AnnouncementContext);

  return (
    <>
      {comments?.length === 0 ? (
        <>
          {userLogged && userToken && userLogged.id === userId ? (
            <NoCommentsBoxStyle>
              <p>Este anúncio não possui comentários.</p>
            </NoCommentsBoxStyle>
          ) : (
            <NoCommentsBoxStyle>
              <p>Para visualizar os comentários é necessário estar logado.</p>
            </NoCommentsBoxStyle>
          )}
        </>
      ) : (
        <>
          {userLogged && userToken && userLogged.id === userId && (
            <CommentsBoxStyle>
              <h2>Comentários</h2>
              <ul>
                {comments?.map((comment, index) => {
                  return <CommentCard key={index} comment={comment} />;
                })}
              </ul>
            </CommentsBoxStyle>
          )}
        </>
      )}
    </>
  );
};
