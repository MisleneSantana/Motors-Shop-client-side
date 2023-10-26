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
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { TextareaStyle } from '../../Textarea/style';
import { DivModalStyle } from './style';

export const CreateAnnouncement = () => {
  const { createAnnouncement } = useContext(AnnouncementContext);
  const { setIsCreateAdsModalOpen } = useContext(ModalContext);
  const { loading } = useContext(LoadingContext);
  const [inputImage, setInputImage] = useState([1, 2]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TAnnouncementValidator>({
    resolver: zodResolver(announcementValidator),
  });

  const submit: SubmitHandler<TAnnouncementRequest> = (formData) => {
    createAnnouncement(formData);
    setIsCreateAdsModalOpen(false);

    setValue('brand', '');
    setValue('model', '');
    setValue('year', '');
    setValue('fuel', '');
    setValue('color', '');
    setValue('description', '');
    setValue('cover_image_url', '');
  };

  const createInputImage = () => {
    if (inputImage.length < 6) {
      setInputImage([...inputImage, inputImage.length + 1]);
    }
  };

  return (
    <DivModalStyle role='dialog'>
      <ModelForm titleForm='Criar anúncio' onSubmit={handleSubmit(submit)}>
        <nav>
          <button onClick={() => setIsCreateAdsModalOpen(false)}>X</button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações do veículo
        </StyledTexts>
        <Input
          type='text'
          label='Marca'
          id='brand'
          disabled={loading}
          placeholder='Chevrolet'
          {...register('brand')}
          error={errors.brand}
        />
        <Input
          type='text'
          label='Modelo'
          id='model'
          disabled={loading}
          placeholder='Camaro'
          {...register('model')}
          error={errors.model}
        />
        <div className='content__year-fuel'>
          <Input
            type='text'
            label='Ano'
            id='year'
            disabled={loading}
            placeholder='2018'
            {...register('year')}
            error={errors.year}
          />
          <Input
            type='text'
            label='Combustível'
            id='fuel'
            disabled={loading}
            placeholder='Gasolina / Etanol'
            {...register('fuel')}
            error={errors.fuel}
          />
        </div>
        <div className='content__km-color'>
          <Input
            type='text'
            label='Quilometragem'
            id='km'
            disabled={loading}
            placeholder='30.000'
            {...register('km')}
            error={errors.km}
          />
          <Input
            type='text'
            label='Cor'
            id='color'
            disabled={loading}
            placeholder='Branco'
            {...register('color')}
            error={errors.color}
          />
        </div>
        <div className='content__table_price-price'>
          <Input
            type='text'
            label='Preço tabela FIPE'
            id='table_price'
            disabled={loading}
            placeholder='R$ 48.000,00'
            {...register('table_price')}
            error={errors.table_price}
          />
          <Input
            type='text'
            label='Preço'
            id='price'
            disabled={loading}
            placeholder='R$ 50.000,00'
            {...register('price')}
            error={errors.price}
          />
        </div>
        <div className='content__textarea'>
          <Label htmlFor='description' name='Descrição' />
          <TextareaStyle
            placeholder='Descrição do carro'
            id='description'
            disabled={loading}
            {...register('description')}
          />
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
        {inputImage.map((input, index) => (
          <Input
            key={input}
            id={`images${input}`}
            label={`${input}ª Imagem da Galeria`}
            type='text'
            placeholder={'https://image.com'}
            {...register(`images.${index}.image_url`)}
            error={
              errors?.images?.[index] && (
                <p>{`* ${errors.images[index]?.image_url?.message}`}</p>
              )
            }
          />
        ))}

        <Button
          className={'button__add-gallery-image'}
          type={'button'}
          text='Adicionar campo para imagem da galeria'
          onClick={createInputImage}
          disabled={inputImage.length == 6 ? true : false}
        />
        <section className='buttons__section'>
          <Button
            className={'cancel__button'}
            type={'button'}
            onClick={() => setIsCreateAdsModalOpen(false)}
            text={' Cancelar'}
          />
          <Button
            className={'create-ad__button'}
            type={'submit'}
            text={loading ? 'Carregando' : 'Criar anúncio'}
          />
        </section>
      </ModelForm>
    </DivModalStyle>
  );
};
