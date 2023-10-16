import { z } from 'zod';

export const addressSchema = z.object({
  address: z.object({
    cep: z.string().nonempty({ message: 'Campo obrigatório' }),
    state: z.string().nonempty({ message: 'Campo obrigatório' }),
    city: z.string().nonempty({ message: 'Campo obrigatório' }),
    street: z.string().nonempty({ message: 'Campo obrigatório' }),
    number: z.string().nonempty({ message: 'Campo obrigatório' }),
    complement: z.string().optional(),
  }),
});
export type TAddressRequest = z.infer<typeof addressSchema>;
