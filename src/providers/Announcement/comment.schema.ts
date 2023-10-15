import { z } from 'zod';

export const commentSchema = z.object({
  comment: z.string(),
});

export const commentReturnSchema = z.object({
  id: z.string(),
  comment: z.string(),
  createdAt: z.string().or(z.instanceof(Date)),
  announcement: z.object({
    id: z.string(),
    brand: z.string().max(15),
    model: z.string().max(20),
    year: z.string().max(4),
    fuel: z.string().max(15),
    km: z.number().int().positive(),
    color: z.string().max(15),
    table_price: z
      .number()
      .positive()
      .default(() => 0)
      .or(z.string()),
    price: z
      .number()
      .positive()
      .default(() => 0)
      .or(z.string()),
    description: z.string().nullish(),
    cover_image_url: z.string().max(280),
    announcement_is_active: z.boolean().default(true),
    createdAt: z.string().or(z.date()),
  }),
  user: z.object({
    id: z.string(),
    name: z.string().max(50),
    email: z.string().max(45).email(),
    account_type: z.string().max(15),
  }),
});

export const commentReadSchema = commentReturnSchema.array();
