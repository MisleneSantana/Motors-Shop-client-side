import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import {
  TAnnouncementValidator,
  announcementValidator,
} from './announcement.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { Input } from '../../Input';
import { TAnnouncementRequest } from '../../../interfaces/announcement.interfaces';
import { Label } from '../../Label';
import { Button } from '../../Button';

export const CreateAnnouncement = () => {
  const { createAnnouncement } = useContext(AnnouncementContext);
  const { setIsCreateAdsModalOpen } = useContext(ModalContext);
  const { loading } = useContext(LoadingContext);
  const [inputImage, setInputImage] = useState([1, 2]);

  const handleInputImage = () => {
    if (inputImage.length < 6) {
      setInputImage([...inputImage, inputImage.length + 1]);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TAnnouncementValidator>({
    resolver: zodResolver(announcementValidator),
  });

  const submit: SubmitHandler<TAnnouncementRequest> = (formData) => {
    // const newAd = { ...formData, km: Number(formData.km) };
    createAnnouncement(formData);
    setIsCreateAdsModalOpen(false);

    setValue('brand', '');
    setValue('model', '');
    setValue('year', '');
    setValue('fuel', '');
    setValue('km', Number(''));
    setValue('color', '');
    setValue('table_price', Number(''));
    setValue('price', Number(''));
    setValue('description', '');
    setValue('cover_image_url', '');
  };

  return (
    <div role='dialog'>
      <nav>
        <h2>Criar anúncio</h2>
        <button onClick={() => setIsCreateAdsModalOpen(false)}>X</button>
      </nav>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Informações do veículo</h3>
        <Input
          type='text'
          label='Marca'
          id='brand'
          placeholder='Chevrolet'
          {...register('brand')}
          error={errors.brand}
        />
        <Input
          type='text'
          label='Modelo'
          id='model'
          placeholder='Camaro'
          {...register('model')}
          error={errors.model}
        />
        <div>
          <Input
            type='text'
            label='Ano'
            id='year'
            placeholder='2018'
            {...register('year')}
            error={errors.year}
          />
          <Input
            type='text'
            label='Combustível'
            id='fuel'
            placeholder='Gasolina / Etanol'
            {...register('fuel')}
            error={errors.fuel}
          />
        </div>
        <div>
          <Input
            type='text'
            label='Quilometragem'
            id='km'
            placeholder='30.000'
            {...register('km')}
            error={errors.km}
          />
          <Input
            type='text'
            label='Cor'
            id='color'
            placeholder='Branco'
            {...register('color')}
            error={errors.color}
          />
        </div>
        <div>
          <Input
            type='text'
            label='Preço tabela FIPE'
            id='table_price'
            placeholder='R$ 48.000,00'
            {...register('table_price')}
            error={errors.table_price}
          />
          <Input
            type='text'
            label='Preço'
            id='price'
            placeholder='R$ 50.000,00'
            {...register('price')}
            error={errors.price}
          />
        </div>
        <div>
          <Label htmlFor='description' name='Descrição' />
          <textarea
            id='description'
            placeholder='Descrição do carro'
            {...register('description')}
          />
          {errors.description?.message && <p>{errors.description?.message}</p>}
        </div>
        <Input
          type='text'
          label='Imagem de capa'
          id='cover_image_url'
          placeholder='https://image.com'
          {...register('cover_image_url')}
          error={errors.cover_image_url}
        />
        {/* Renderizar inputs (imagem da galeria) de forma dinâmica */}
        {inputImage.map((input) => (
          <Input
            key={input}
            id={`images${input}`}
            label={`${input}ª Imagem da Galeria`}
            type='text'
            placeholder={'https://image.com'}
            {...register('images')}
            error={
              errors?.images?.[input] && (
                <p>{`* ${errors.images[input]?.image_url?.message}`}</p>
              )
            }
          />
        ))}

        <Button
          onClick={handleInputImage}
          type='button'
          disabled={inputImage.length == 6 ? true : false}
          text='Adicionar campo para imagem da galeria'
        />

        <section>
          <Button
            type='button'
            onClick={() => setIsCreateAdsModalOpen(false)}
            text=' Cancelar'
          />
          <Button
            type='submit'
            text={loading ? 'Carregando' : 'Criar anúncio'}
          />
        </section>
      </form>
    </div>
  );
};
