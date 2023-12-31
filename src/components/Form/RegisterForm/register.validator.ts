import { z } from 'zod';

export const registerValidator = z
  .object({
    name: z.string().nonempty({ message: 'Campo obrigatório' }),
    email: z
      .string()
      .nonempty({ message: 'Campo obrigatório' })
      .email('E-mail inválido'),
    cpf: z.string().nonempty({ message: 'Campo obrigatório' }),
    phone_number: z
      .string()
      .nonempty({ message: 'Campo obrigatório' })
      .transform((data) => {
        return data
          .replace('.', '')
          .replace('-', '')
          .replace('(', '')
          .replace(')', '')
          .trim();
      }),
    birth_date: z.string().nonempty({ message: 'Campo obrigatório' }),
    description: z.string().optional(),
    address: z.object({
      cep: z
        .string()
        .nonempty({ message: 'Campo obrigatório' })
        .transform((data) => {
          return data
            .replace('.', '')
            .replace('-', '')
            .replace('(', '')
            .replace(')', '')
            .trim();
        }),
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
      .regex(/(?=.*?[A-Z])/, 'Deve conter ao menos uma letra maiuscula')
      .regex(/(?=.*?[a-z])/, 'Deve conter ao menos uma letra minúscula ')
      .regex(/(?=.*?[0-9])/, 'Deve conter conter ao menos um número')
      .regex(/(?=.*?[\W])/, 'Deve conter conter ao menos um caracter especial'),
    confirmPassword: z.string().nonempty('Por favor, confirme sua senha'),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: 'As senhas não correspondem. Por favor, tente novamente.',
    path: ['confirmPassword'],
  });

export const registerRequestValidator = z.object({
  name: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .transform((name) => {
      return name
        .trim()
        .split('')
        .map((word) =>
          word[0].toUpperCase().concat(word.substring(1)).toLowerCase()
        )
        .join('');
    }),
  email: z
    .string()
    .email('E-mail inválido')
    .nonempty({ message: 'Campo obrigatório' }),
  cpf: z.string().nonempty({ message: 'Campo obrigatório' }),
  phone_number: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .transform((data) => {
      return data
        .replace('.', '')
        .replace('-', '')
        .replace('(', '')
        .replace(')', '')
        .trim();
    }),
  birth_date: z.string().nonempty({ message: 'Campo obrigatório' }),
  description: z.string().optional(),
  address: z.object({
    cep: z
      .string()
      .nonempty({ message: 'Campo obrigatório' })
      .transform((data) => {
        return data
          .replace('.', '')
          .replace('-', '')
          .replace('(', '')
          .replace(')', '')
          .trim();
      }),
    state: z.string().nonempty({ message: 'Campo obrigatório. Ex: SP' }),
    city: z.string().nonempty({ message: 'Campo obrigatório' }),
    street: z.string().nonempty({ message: 'Campo obrigatório' }),
    number: z.string().nonempty({ message: 'Campo obrigatório' }),
    complement: z.string().optional(),
  }),
  account_type: z.string().nonempty('Selecione o perfil da conta'),
  password: z.string().nonempty('Campo obrigatório'),
});

export type TRegisterValidator = z.infer<typeof registerValidator>;
export type TRegisterReqValidator = z.infer<typeof registerRequestValidator>;
export const editUserSchema = registerRequestValidator.partial();
