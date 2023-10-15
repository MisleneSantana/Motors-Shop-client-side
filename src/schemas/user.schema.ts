import { z } from 'zod';
import {
  userAddressRegisterSchema,
  userAddressResponseSchema,
  userAddressUpdateSchema,
} from './address.schema';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone_number: z.string(),
  birth_date: z.string(),
  description: z.string().optional(),
  account_type: z.string(),
  password: z.string(),
  reset_password: z.string().optional(),
  code_expire: z.string().optional(),
  createdAt: z.string(),
  address: userAddressRegisterSchema,
});

export const userRegisterSchema = userSchema.omit({
  id: true,
  createdAt: true,
  reset_password: true,
  code_expire: true,
});

export const userResponseSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone_number: z.string(),
    birth_date: z.string(),
    description: z.string().optional(),
    account_type: z.string(),
    password: z.string(),
    createdAt: z.string(),
    address: userAddressUpdateSchema,
  })
  .omit({ password: true, reset_password: true, code_expire: true });

export const userReadSchema = userAddressResponseSchema.array();

export const userUpdateSchema = userRegisterSchema.optional();

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const userLoginResponse = z.object({
  token: z.string(),
});

export const userLoginReturn = z.object({
  token: z.string(),
  user: userSchema,
});
