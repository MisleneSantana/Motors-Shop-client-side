import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/Ad/AdContext';
import { AnnouncementCard } from './AnnouncementCard';
import { AnnouncementsBoxStyle } from './style';
import { AuthContext } from '../../providers/Auth/AuthContext';
import { useLocation } from 'react-router-dom';

export const AnnouncementList = () => {
  const route = useLocation();
  const location = `${route.pathname}`;

  const { user } = useContext(AuthContext);
  const { announcements, sellerAnnouncements } =
    useContext(AnnouncementContext);

  return (
    <>
      {location === '/' || location === '/buyerHome' ? (
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
      ) : (
        <>
          {sellerAnnouncements?.length > 0 ? (
            <AnnouncementsBoxStyle>
              {user ? (
                user.account_type === 'buyer' ? (
                  <h3>Anúncios</h3>
                ) : null
              ) : undefined}
              <ul>
                {sellerAnnouncements?.map((announcement) => {
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
      )}
    </>
  );
};
