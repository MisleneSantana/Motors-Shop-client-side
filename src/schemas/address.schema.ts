import { z } from 'zod';

export const userAddressSchema = z.object({
  id: z.string(),
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
});

export const userAddressRegisterSchema = userAddressSchema.omit({
  id: true,
});

export const userAddressResponseSchema = userAddressSchema;

export const userAddressUpdateSchema = userAddressRegisterSchema.partial();
