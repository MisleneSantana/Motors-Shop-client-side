import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Announcement/AnnouncementContext';
import { AnnouncementCard } from './AnnouncementCard';

export const AnnouncementList = () => {
  const { announcements } = useContext(AnnouncementContext);

  return (
    <div>
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
    </div>
  );
};
