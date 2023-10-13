import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/AnnouncementContext';
import { AnnouncementCard } from './AnnouncementCard';

export const AnnouncementList = () => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <div>
      <ul>
        {announcements?.data.map((announcement) => {
          return (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          );
        })}
      </ul>
    </div>
  );
};
