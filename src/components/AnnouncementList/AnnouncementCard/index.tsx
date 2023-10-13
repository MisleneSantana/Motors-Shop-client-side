import { IAnnouncementResponse } from '../../../providers/AnnouncementContext';

interface IAnnouncementCartProps {
  announcement: IAnnouncementResponse;
}

export const AnnouncementCard = ({ announcement }: IAnnouncementCartProps) => {
  const userFullName = announcement.user?.name
    .trim()
    .split(' ')
    .map((userName: string, index: number) => {
      if (
        index === announcement.user?.name.split(' ').length - 1 ||
        index === 0
      ) {
        return userName[0].toUpperCase();
      }
    })
    .join('');

  const username =
    announcement?.user.name &&
    announcement?.user.name[0].toUpperCase() +
      announcement?.user.name.substring(1);

  return (
    <>
      <li>
        <img src={announcement?.cover_image_url} alt={announcement?.brand} />
        <h3>
          {announcement?.brand} - {announcement?.model}
        </h3>
        <p>{announcement?.description}</p>
        <div>
          <span>{username}</span>
          <p>{userFullName}</p>
        </div>
        <div>
          <div>
            <p>{announcement.km} KM</p>
            <p>{announcement.year}</p>
          </div>
          <p>
            R${' '}
            {announcement.price.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </li>
    </>
  );
};
