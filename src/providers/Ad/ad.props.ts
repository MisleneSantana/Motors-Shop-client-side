import { AxiosResponse } from 'axios';
import {
  IPaginationAnnouncements,
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementResponse,
} from '../../interfaces/announcement.interfaces';
import {
  TCommentRequest,
  TCommentResponse,
} from '../../interfaces/comment.interfaces';

export interface IAnnouncementProviderProps {
  children: React.ReactNode;
}

export interface IAnnouncementProviderValues {
  announcements: TAnnouncement[];
  setAnnouncements: React.Dispatch<React.SetStateAction<TAnnouncement[]>>;
  adsPagination: IPaginationAnnouncements;
  setAdsPagination: React.Dispatch<
    React.SetStateAction<IPaginationAnnouncements>
  >;
  singleAnnouncement: TAnnouncement | undefined;
  sellerAnnouncements: TAnnouncement[];
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
  comments: TCommentResponse[];
  setComments: React.Dispatch<React.SetStateAction<TCommentResponse[]>>;
  createComment: (
    formData: TCommentRequest,
    announcementId: string
  ) => Promise<TCommentResponse | undefined>;
  getComments: (announcementId: string) => Promise<void>;
  updateComment: (
    formData: TCommentRequest,
    commentId: string
  ) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}
