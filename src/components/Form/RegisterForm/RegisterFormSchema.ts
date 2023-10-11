import { z } from 'zod';

export const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .nonempty('O nome é obrigatório')
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
      .nonempty('O e-mail é obrigatório'),
    cpf: z.string().nonempty('O CPF é obrigatório'),
    phone_number: z.string().nonempty('O telefone é obrigatório'),
    birth_date: z.string().nonempty('A data de nascimento é obrigatória'),
    description: z.string(),
    cep: z.string().nonempty('O CEP é obrigatório'),
    state: z.string().nonempty('O estado é obrigatório'),
    city: z.string().nonempty('A cidade é obrigatória'),
    street: z.string().nonempty('A rua é obrigatória'),
    number: z.string().nonempty('O número é obrigatório'),
    complement: z.string(),
    account_type: z.string().nonempty('Selecione o tipo de conta'),
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

export type TRegisterFormSchema = z.infer<typeof RegisterFormSchema>;
