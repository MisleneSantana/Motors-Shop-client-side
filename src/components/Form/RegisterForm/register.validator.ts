import { z } from 'zod';

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: 'Campo obrigatório' })
      .transform((name) => {
        return name
          .trim()
          .split('')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join('');
      }),
    email: z
      .string()
      .email('E-mail inválido')
      .nonempty({ message: 'Campo obrigatório' }),
    cpf: z.string().nonempty({ message: 'Campo obrigatório' }),
    phone_number: z.string().nonempty({ message: 'Campo obrigatório' }),
    birth_date: z.string().nonempty({ message: 'Campo obrigatório' }),
    description: z.string().optional(),
    address: z.object({
      cep: z.string().nonempty({ message: 'Campo obrigatório' }),
      state: z.string().nonempty({ message: 'Campo obrigatório' }),
      city: z.string().nonempty({ message: 'Campo obrigatório' }),
      street: z.string().nonempty({ message: 'Campo obrigatório' }),
      number: z.string().nonempty({ message: 'Campo obrigatório' }),
      complement: z.string().optional(),
    }),
    account_type: z.string().nonempty('Selecione o perfil da conta'),
    password: z
      .string()
      .min(7, 'Mínimo de 7 caracteres')
      .regex(/(?=.*?[A-Z])/, 'Necessário ao menos uma letra maiuscula')
      .regex(/(?=.*?[a-z])/, 'Necessário ao menos uma letra minúscula ')
      .regex(/(?=.*?[0-9])/, 'Necessário conter ao menos um número')
      .regex(/(?=.*?[\W])/, 'Necessário conter ao menos um caracter especial'),
    confirmPassword: z.string().nonempty('Por favor, confirme sua senha'),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'As senhas não correspondem. Por favor, tente novamente.',
    path: ['confirmPassword'],
  });

export const registerFormRequest = z.object({
  name: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .transform((name) => {
      return name
        .trim()
        .split('')
        .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join('');
    }),
  email: z
    .string()
    .email('E-mail inválido')
    .nonempty({ message: 'Campo obrigatório' }),
  cpf: z.string().nonempty({ message: 'Campo obrigatório' }),
  phone_number: z.string().nonempty({ message: 'Campo obrigatório' }),
  birth_date: z.string().nonempty({ message: 'Campo obrigatório' }),
  description: z.string().optional(),
  address: z.object({
    cep: z.string().nonempty({ message: 'Campo obrigatório' }),
    state: z.string().nonempty({ message: 'Campo obrigatório' }),
    city: z.string().nonempty({ message: 'Campo obrigatório' }),
    street: z.string().nonempty({ message: 'Campo obrigatório' }),
    number: z.string().nonempty({ message: 'Campo obrigatório' }),
    complement: z.string().optional(),
  }),
  account_type: z.string().nonempty('Selecione o perfil da conta'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;
export type TRegisterRequest = z.infer<typeof registerFormRequest>;
export const editUserSchema = registerFormRequest.partial();
