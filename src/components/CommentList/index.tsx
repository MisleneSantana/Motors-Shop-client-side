import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { CommentCard } from './CommentCard';

export const CommentList = () => {
  const { comments } = useContext(AnnouncementContext);

  return (
    <section>
      <h2>Comentários</h2>
      <ul>
        {comments.length === 0 ? (
          <p>Este anúncio não possui comentários.</p>
        ) : (
          comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        )}
      </ul>
    </section>
  );
};
