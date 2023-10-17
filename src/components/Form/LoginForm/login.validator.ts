import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('E-mail inválido').nonempty('Campo obrigatório'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
