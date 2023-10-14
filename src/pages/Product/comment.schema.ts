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
    brand: z.string(),
    model: z.string(),
    year: z.string(),
    fuel: z.string(),
    km: z.number(),
    color: z.string(),
    table_price: z.string(),
    price: z.string(),
    description: z.string(),
    announcement_is_active: z.boolean(),
    createdAt: z.date(),
  }),
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    account_type: z.string(),
  }),
});

export const commentReadSchema = z.array(commentReturnSchema);
