import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('E-mail inválido').nonempty('O e-mail é obrigatório'),
  password: z.string().nonempty('A senha é obrigatória'),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
