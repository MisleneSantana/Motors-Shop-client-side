import { z } from 'zod';

export const imageSchema = z.object({
  id: z.string(),
  image_url: z.string(),
});

export const imageRequestSchema = z.object({
  image_url: z.string(),
});

export const announcementSchema = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  km: z.number(),
  color: z.string(),
  table_price: z.number(),
  price: z.number(),
  description: z.string().optional(),
  cover_image_url: z.string(),
  images: z.array(imageSchema),
});

export const announcementRequestSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  km: z.number(),
  color: z.string(),
  table_price: z.number(),
  price: z.number(),
  description: z.string().optional(),
  cover_image_url: z.string(),
  images: z.array(imageRequestSchema),
});

export const announcementResponseSchema = announcementSchema.extend({
  id: z.string(),
  announcement_is_active: z.boolean(),
  createdAt: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string(),
    phone_number: z.string(),
    description: z.string().optional(),
  }),
  images: z
    .object({
      id: z.string(),
      image_url: z.string().max(280),
    })
    .array(),
});

export const announcementReadSchema = z
  .object({
    id: z.string(),
    createdAt: z.string(),
    announcement_is_active: z.boolean(),
    brand: z.string(),
    model: z.string(),
    description: z.string().optional(),
    km: z.number(),
    year: z.string(),
    price: z
      .number()
      .positive()
      .default(() => 0)
      .or(z.string()),
    user: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .optional(),
    cover_image_url: z.string(),
    images: z
      .object({
        id: z.string(),
        image_url: z.string(),
      })
      .array(),
  })
  .array();

export const announcementUpdate = announcementRequestSchema.partial();
