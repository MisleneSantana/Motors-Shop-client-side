import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { CommentCard } from './CommentCard';
import { CommentsBoxStyle } from './style';

export const CommentList = () => {
  const { comments } = useContext(AnnouncementContext);

  return (
    <>
      {comments?.length === 0 ? (
        <div>
          <p>Este anúncio não possui comentários.</p>
        </div>
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
