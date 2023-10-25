import { z } from 'zod';

export const announcementValidator = z.object({
  brand: z.string().nonempty({ message: 'Campo obrigatório' }),
  model: z.string().nonempty({ message: 'Campo obrigatório' }),
  year: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .min(4, 'Ano completo'),
  fuel: z.string().nonempty({ message: 'Campo obrigatório' }),
  km: z
    .string()
    .nonempty('Campo obrigatório')
    .transform((value) => Number(parseFloat(value))),
  color: z.string().nonempty({ message: 'Campo obrigatório' }),
  table_price: z
    .string()
    .nonempty('Campo obrigatório')
    .transform((value) => Number(parseFloat(value))),
  price: z
    .string()
    .nonempty('Campo obrigatório')
    .transform((value) => Number(parseFloat(value))),
  description: z.string().optional(),
  cover_image_url: z.string().nonempty({ message: 'Imagem obrigatória' }),
  images: z
    .object({
      image_url: z.string(),
    })
    .array(),
});

export type TAnnouncementValidator = z.infer<typeof announcementValidator>;
