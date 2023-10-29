import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { EditOrDeleteAnnouncement } from '../../Form/EditOrDeleteAnnouncement';
import { TAnnouncementResponse } from '../../../interfaces/announcement.interfaces';
import { DeleteAdModal } from '../../Modal/DeleteAdModal';
import {
  StyleAdButtons,
  StyleAnnouncementCard,
  StyleImageAd,
  StyleInfosAd,
  StyleUserNameBox,
} from './style';
import { UserContext } from '../../../providers/User/UserContext';
import { Button } from '../../Button';

export interface IAnnouncementProps {
  announcement: TAnnouncementResponse;
}

export const AnnouncementCard = ({ announcement }: IAnnouncementProps) => {
  const route = useLocation();
  const location = `${route.pathname}`;
  const userId = localStorage.getItem('@user:id');
  const { user } = useContext(AuthContext);
  const { defineInitialsName } = useContext(UserContext);
  const { getAnnouncement, getComments } = useContext(AnnouncementContext);

  const [isEditOrDeleteAdsModalOpen, setIsEditOrDeleteAdsModalOpen] =
    useState(false);
  const [isConfirmDeleteAdModalOpen, setIsConfirmDeleteAdModalOpen] =
    useState(false);

  return (
    <>
      <StyleAnnouncementCard>
        <StyleImageAd>
          <img src={announcement?.cover_image_url} alt={announcement?.brand} />
        </StyleImageAd>
        <h4>
          {announcement?.brand} - {announcement?.model}
        </h4>
        <p>{announcement?.description}</p>
        {location === '/' || location === '/buyerHome' ? (
          <StyleUserNameBox>
            <span>{defineInitialsName(announcement?.user?.name)}</span>
            <p>{announcement.user?.name}</p>
          </StyleUserNameBox>
        ) : null}
        <StyleInfosAd>
          <div>
            <p>
              {announcement.km?.toLocaleString('pt-br', {
                currency: 'BRL',
              })}{' '}
              KM
            </p>
            <p>{announcement.year}</p>
          </div>
          <p>
            {Number(announcement?.price)?.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </StyleInfosAd>
        <div>
          {location === '/sellerHome' &&
          user?.account_type?.toLowerCase() === 'seller' &&
          user?.id === userId ? (
            <>
              <StyleAdButtons>
                {user?.id === announcement.user.id ? (
                  <Button
                    text=' Editar'
                    onClick={() => setIsEditOrDeleteAdsModalOpen(true)}
                  />
                ) : (
                  <Button
                    className='disabled__button'
                    text='Editar'
                    disabled={true}
                  />
                )}

                {isEditOrDeleteAdsModalOpen ? (
                  <>
                    <div>
                      <EditOrDeleteAnnouncement
                        announcement={announcement}
                        setIsEditOrDeleteAdsModalOpen={
                          setIsEditOrDeleteAdsModalOpen
                        }
                        setIsConfirmDeleteAdModalOpen={
                          setIsConfirmDeleteAdModalOpen
                        }
                      />
                    </div>
                  </>
                ) : null}
                <Link
                  to='/product'
                  onClick={() => (
                    getAnnouncement(announcement.id),
                    getComments(announcement.id)
                  )}
                >
                  Ver detalhes
                </Link>
              </StyleAdButtons>
              <div>
                {isConfirmDeleteAdModalOpen ? (
                  <DeleteAdModal
                    announcement={announcement}
                    setIsConfirmDeleteAdModalOpen={
                      setIsConfirmDeleteAdModalOpen
                    }
                  />
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </StyleAnnouncementCard>
    </>
  );
};
