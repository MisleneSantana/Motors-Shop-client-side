import {
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
  announcements: TAnnouncementResponse[];
  setAnnouncements: React.Dispatch<
    React.SetStateAction<TAnnouncementResponse[]>
  >;
  singleAnnouncement: TAnnouncement | undefined;

  sellerAnnouncements: TAnnouncementResponse[];
  
  getAnnouncements: () => Promise<void>;
  createAnnouncement: (formData: TAnnouncementRequest) => Promise<void>;
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
