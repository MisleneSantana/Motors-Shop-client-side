import { z } from 'zod';
import {
  userAddressRegisterSchema,
  userAddressResponseSchema,
  userAddressSchema,
  userAddressUpdateSchema,
} from '../schemas/address.schema';

export type TAddress = z.infer<typeof userAddressSchema>;
export type TAddressRegister = z.infer<typeof userAddressRegisterSchema>;
export type TAddressResponse = z.infer<typeof userAddressResponseSchema>;
export type TAddressUpdate = z.infer<typeof userAddressUpdateSchema>;
