import { z } from 'zod';
import {
  commentReadSchema,
  commentRequestSchema,
  commentResponseSchema,
  commentSchema,
  commentUpdateSchema,
} from '../schemas/comment.schema';

export type TComment = z.infer<typeof commentSchema>;
export type TCommentRequest = z.infer<typeof commentRequestSchema>;
export type TCommentResponse = z.infer<typeof commentResponseSchema>;
export type TCommentRead = z.infer<typeof commentReadSchema>;
export type TCommentUpdate = z.infer<typeof commentUpdateSchema>;