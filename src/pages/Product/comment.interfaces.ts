import { z } from 'zod';
import {
  commentSchema,
  commentReturnSchema,
  commentReadSchema,
} from './comment.schema';

export type TComment = z.infer<typeof commentSchema>;
export type TCommentReturn = z.infer<typeof commentReturnSchema>;
export type TCommentRead = z.infer<typeof commentReadSchema>;
