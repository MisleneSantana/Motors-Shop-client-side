import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { Input } from '../../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TAnnouncementValidator,
  announcementValidator,
} from '../CreateAnnouncement/announcement.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { TAnnouncementUpdate } from '../../../interfaces/announcement.interfaces';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { Label } from '../../Label';
import { Button } from '../../Button';
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { TextareaStyle } from '../../Textarea/style';
import { DivModalStyle } from '../CreateAnnouncement/style';
import { IAnnouncementProps } from '../../AnnouncementList/AnnouncementCard';

export const EditOrDeleteAnnouncement = ({
  announcement,
}: IAnnouncementProps) => {
  const [inputImage, setInputImage] = useState([1, 2]);
  const { loading } = useContext(LoadingContext);
  const { setIsEditOrDeleteAdsModalOpen, setIsConfirmDeleteAdModalOpen } =
    useContext(ModalContext);
  const { updateAnnouncement } = useContext(AnnouncementContext);

  const createInputImage = () => {
    if (inputImage.length < 6) {
      setInputImage([...inputImage, inputImage.length + 1]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAnnouncementValidator>({
    resolver: zodResolver(announcementValidator),
  });

  const submit: SubmitHandler<TAnnouncementUpdate> = (formData) => {
    updateAnnouncement(formData, announcement.id);

    // for (const key in formData) {
    //   if (formData[key as keyof TAnnouncementUpdate] === '') {
    //     formData[key as keyof TAnnouncementUpdate] = announcement[
    //       key as keyof IAnnouncementProps
    //     ] as string;
    //   }
    // }
    setIsEditOrDeleteAdsModalOpen(false);
  };

  return (
    <DivModalStyle role='dialog'>
      <ModelForm titleForm='Editar anúncio' onSubmit={handleSubmit(submit)}>
        <nav>
          <button onClick={() => setIsEditOrDeleteAdsModalOpen(false)}>
            X
          </button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações do veículo
        </StyledTexts>
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
        <div className='content__year-fuel'>
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
        <div className='content__km-color'>
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
        <div className='content__table_price-price'>
          <Input
            type='text'
            label='Preço tabela FIPE'
            id='table_price'
            placeholder='48.000,00'
            {...register('table_price')}
            error={errors.table_price}
          />
          <Input
            type='text'
            label='Preço'
            id='price'
            placeholder='50.000,00'
            {...register('price')}
            error={errors.price}
          />
        </div>
        <div className='content__textarea'>
          <Label htmlFor='description' name='Descrição' />
          <TextareaStyle
            id='description'
            placeholder='Descrição do carro'
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
            className={'delete__button'}
            type={'button'}
            onClick={() => setIsConfirmDeleteAdModalOpen(true)}
            text=' Excluir anúncio'
          />
          <Button
            className={'create-ad__button'}
            type='submit'
            text={loading ? 'Salvando' : 'Salvar as alterações'}
          />
        </section>
      </ModelForm>
    </DivModalStyle>
  );
};
