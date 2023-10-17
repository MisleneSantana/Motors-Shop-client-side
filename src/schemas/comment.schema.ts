import { z } from 'zod';

export const commentSchema = z.object({
  id: z.string(),
  comment: z.string(),
});

export const commentRequestSchema = z.object({
  comment: z.string(),
});

export const commentResponseSchema = z.object({
  id: z.string(),
  comment: z.string(),
  createdAt: z.string().or(z.instanceof(Date)),
  announcement: z.object({
    id: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    km: z.number(),
    color: z.string(),
    table_price: z.number().or(z.string()),
    price: z.number().or(z.string()),
    description: z.string().optional(),
    cover_image_url: z.string(),
    announcement_is_active: z.boolean(),
    createdAt: z.string().or(z.date()),
  }),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    account_type: z.string(),
  }),
});

export const commentReadSchema = commentResponseSchema.array();
