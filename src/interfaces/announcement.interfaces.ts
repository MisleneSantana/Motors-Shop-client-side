import { z } from 'zod';
import {
  announcementReadSchema,
  announcementRequestSchema,
  announcementResponseSchema,
  announcementSchema,
  announcementUpdate,
  singleAnnouncementReadSchema,
} from '../schemas/announcement.schema';

export type TAnnouncement = z.infer<typeof announcementSchema>;
export type TAnnouncementRequest = z.infer<typeof announcementRequestSchema>;
export type TAnnouncementResponse = z.infer<typeof announcementResponseSchema>;
export type TAnnouncementRead = z.infer<typeof announcementReadSchema>;
export type TAnnouncementUpdate = z.infer<typeof announcementUpdate>;
export type TSingleAnnouncementRead= z.infer<typeof singleAnnouncementReadSchema>

export interface IPaginationAnnouncements {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TAnnouncementResponse[];
}
