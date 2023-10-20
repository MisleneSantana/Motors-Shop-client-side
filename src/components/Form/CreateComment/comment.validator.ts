import { z } from 'zod';

export const CommentSchema = z.object({
  comment: z.string().nonempty('Faça um comentário'),
});

export type TCommentFormSchema = z.infer<typeof CommentSchema>;
