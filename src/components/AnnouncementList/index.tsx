import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { AnnouncementCard } from './AnnouncementCard';

export const AnnouncementList = () => {
  const { announcements } = useContext(AnnouncementContext);

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

// const { adsPagination } = useContext(AnnouncementContext);

// return (
//   <section>
//     <ul>
//       {adsPagination.data?.map((announcement) => {
//         return (
//           <AnnouncementCard
//             key={announcement.id}
//             announcement={announcement}
//           />
//         );
//       })}
//     </ul>
//   </section>
// );
