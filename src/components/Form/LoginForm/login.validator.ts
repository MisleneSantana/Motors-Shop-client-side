import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().nonempty('Campo obrigatório').email('E-mail inválido'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;
