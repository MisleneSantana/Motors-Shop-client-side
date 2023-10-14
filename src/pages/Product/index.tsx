import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AnnouncementContext } from '../../providers/AnnouncementContext';
import { useState } from "react";


export const Product = () => {
  const { id } = useParams();
  const { announcementById } = useContext(AnnouncementContext);
  const [announcement, setAnnouncement] = useState< | undefined>();
};
