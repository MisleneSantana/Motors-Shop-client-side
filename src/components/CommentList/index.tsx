import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { CommentCard } from './CommentCard';
import { CommentsBoxStyle, NoCommentsBoxStyle } from './style';

export const CommentList = () => {
  const { comments } = useContext(AnnouncementContext);

  return (
    <>
      {comments?.length === 0 ? (
        <NoCommentsBoxStyle>
          <p>Este anúncio não possui comentários.</p>
        </NoCommentsBoxStyle>
      ) : (
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
  );
};
