import { z } from 'zod';
import {
  userLoginResponse,
  userLoginSchema,
  userReadSchema,
  userRegisterSchema,
  userResponseSchema,
  userSchema,
  userUpdateSchema,
} from '../schemas/user.schema';

export type TUser = z.infer<typeof userSchema>;
export type TUserRegister = z.infer<typeof userRegisterSchema>;
export type TUserRegisterRequest = z.infer<typeof userRegisterSchema>;
export type TUserRead = z.infer<typeof userReadSchema>;
export type TUserResponse = z.infer<typeof userResponseSchema>;
export type TUserUpdate = z.infer<typeof userUpdateSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
export type TUserLoginResponse = z.infer<typeof userLoginResponse>;
