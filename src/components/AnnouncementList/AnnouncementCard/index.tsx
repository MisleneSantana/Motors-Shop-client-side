import { useLocation } from 'react-router-dom';
import { TAnnouncementResponse } from '../../../interfaces/announcement.interfaces';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';

interface IAnnouncementProps {
  announcement: TAnnouncementResponse;
}

export const AnnouncementCard = ({ announcement }: IAnnouncementProps) => {
  const route = useLocation();
  const location = `${route.pathname}`;
  const { user } = useContext(AuthContext);
  const { setIsEditOrDeleteAdsModalOpen } = useContext(ModalContext);

  const userFullName = announcement.user?.name;
  announcement?.user.name &&
    announcement?.user.name[0].toUpperCase() +
      announcement?.user.name.substring(1);

  return (
    <>
      <li>
        <img src={announcement?.cover_image_url} alt={announcement?.brand} />
        <h4>
          {announcement?.brand} - {announcement?.model}
        </h4>
        <textarea>{announcement?.description}</textarea>
        {location === '/' || location === '/buyerHome' ? (
          <div>
            <span>{announcement.user.name.charAt(0)}</span>
            <p>{userFullName}</p>
          </div>
        ) : null}
        <div>
          <div>
            <p>{announcement.km} KM</p>
            <p>{announcement.year}</p>
          </div>
          <p>
            R${' '}
            {announcement.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div>
          {location === '/sellerHome' &&
          user?.account_type.toLocaleLowerCase() === 'seller' ? (
            <div>
              <button onClick={() => setIsEditOrDeleteAdsModalOpen(true)}>
                Editar
              </button>
              <button type='submit'>Ver detalhes</button>
            </div>
          ) : null}
        </div>
      </li>
    </>
  );
};
