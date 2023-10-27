import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { AnnouncementCard } from './AnnouncementCard';
import { AnnouncementsBoxStyle } from './style';

export const AnnouncementList = () => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <>
      {announcements.length > 0 ? (
        <AnnouncementsBoxStyle>
          <h3>Anúncios</h3>
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
