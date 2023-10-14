import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AnnouncementContext } from '../../providers/Announcement/AnnouncementContext';
import { useState } from 'react';
import { TCommentReturn } from './comment.interfaces';

export const Product = () => {
  const { id } = useParams();
  const { announcementById } = useContext(AnnouncementContext);
  const [announcement, setAnnouncement] = useState<undefined>();
  const [comment, setComment] = useState<TCommentReturn>([] as TCommentReturn);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCurCar = async () => {
      const car: iCarRes | undefined = await getCar(id);
      setSingleCar(car);

      const { data } = await api.get<tcommentResponse>(`comments/${id}`);
      setComments(data.reverse());
    };

    getCurCar();
  }, [getCar, id]);
};


