import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Announcement/AnnouncementContext';
import { AnnouncementCard } from './AnnouncementCard';
import { TAnnouncementResponse } from '../../interfaces/announcement.interfaces';

interface IAnnouncementProps {
  announcements: TAnnouncementResponse[];
}

export const AnnouncementList = () => {
  const { announcements }: IAnnouncementProps = useContext(AnnouncementContext);

  return (
    <section>
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
    </section>
  );
};
