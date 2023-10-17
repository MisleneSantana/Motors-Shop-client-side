import { AxiosResponse } from 'axios';
import {
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementResponse,
} from '../../interfaces/announcement.interfaces';

export interface IAnnouncementProviderProps {
  children: React.ReactNode;
}

export interface IAnnouncementProviderValues {
  announcements: TAnnouncement[];
  setAnnouncements: React.Dispatch<React.SetStateAction<TAnnouncement[]>>;
  singleAnnouncement: TAnnouncement | undefined;
  sellerAnnouncement: TAnnouncement[];
  loading: boolean;
  getAnnouncements: () => Promise<void>;
  createAnnouncement: (
    formData: TAnnouncementRequest
  ) => Promise<AxiosResponse<TAnnouncementResponse> | undefined>;
  getAnnouncement: (announcementId: string | undefined) => Promise<void>;
  getAnnouncementsBySeller: (userId: string | undefined) => Promise<void>;
  updateAnnouncement: (
    formData: Partial<TAnnouncementRequest>,
    announcementId: string
  ) => Promise<void>;
  deleteAnnouncement: (announcementId: string) => Promise<void>;
}
