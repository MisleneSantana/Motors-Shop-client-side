import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { AnnouncementCard } from './AnnouncementCard';
import { AnnouncementsBoxStyle } from './style';
import { AuthContext } from '../../providers/Auth/AuthContext';

export const AnnouncementList = () => {
  const { user } = useContext(AuthContext);
  const { announcements } = useContext(AnnouncementContext);

  return (
    <>
      {announcements?.length > 0 ? (
        <AnnouncementsBoxStyle>
          {user ? (
            user.account_type === 'buyer' ? (
              <h3>Anúncios</h3>
            ) : null
          ) : undefined}
          <ul>
            {announcements?.map((announcement) => {
              return (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              );
            })}
          </ul>
        </AnnouncementsBoxStyle>
      ) : (
        <AnnouncementsBoxStyle>
          <h3>"Não há anúncios"</h3>
        </AnnouncementsBoxStyle>
      )}
    </>
  );
};
