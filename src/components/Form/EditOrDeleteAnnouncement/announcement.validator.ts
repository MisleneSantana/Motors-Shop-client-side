import { z } from 'zod';

export const announcementUpdateValidator = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  km: z.string().optional(),
  color: z.string().optional(),
  table_price: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  // announcement_is_active: z.string().optional(),
  cover_image_url: z.string().optional(),
  images: z
    .object({
      image_url: z.string(),
    })
    .array()
    .optional(),
});

export type TAnnouncementUpdateValidator = z.infer<
  typeof announcementUpdateValidator
>;
