import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../providers/Ad/AdContext';
import { Input } from '../../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TAnnouncement,
  TAnnouncementRequest,
  TAnnouncementUpdate,
} from '../../../interfaces/announcement.interfaces';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { Label } from '../../Label';
import { Button } from '../../Button';
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { TextareaStyle } from '../../Textarea/style';
import { DivModalStyle } from '../CreateAnnouncement/style';
import {
  TAnnouncementUpdateValidator,
  announcementUpdateValidator,
} from './announcement.validator';

export const EditOrDeleteAnnouncement = ({
  announcement,
  setIsEditOrDeleteAdsModalOpen,
  setIsConfirmDeleteAdModalOpen,
}: {
  announcement: TAnnouncement;
  setIsEditOrDeleteAdsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsConfirmDeleteAdModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [inputImage, setInputImage] = useState([1, 2]);
  const { loading } = useContext(LoadingContext);
  const { updateAnnouncement } = useContext(AnnouncementContext);
  const announcementId = announcement.id;

  const createInputImage = () => {
    if (inputImage.length < 6) {
      setInputImage([...inputImage, inputImage.length + 1]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAnnouncementUpdateValidator>({
    resolver: zodResolver(announcementUpdateValidator),
  });

  const submit: SubmitHandler<TAnnouncementUpdate> = (
    formData: Partial<TAnnouncementRequest>
  ) => {
    for (const key in formData) {
      if (formData[key as keyof TAnnouncementUpdate] === '') {
        formData[key as keyof TAnnouncementUpdate] = announcement[
          key as keyof TAnnouncement
        ] as undefined;
      }
    }

    {
      formData.km
        ? (formData.km = Number(formData.km))
        : (formData.km = Number(announcement.km));
    }

    // const newObj = { ...formData, announcement_is_active: Boolean(formData) };
    updateAnnouncement(formData, announcementId);
    setIsEditOrDeleteAdsModalOpen(false);
  };

  const destroyAnnouncement = () => {
    setIsConfirmDeleteAdModalOpen(true);
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
          placeholder={announcement.brand}
          {...register('brand')}
          error={errors.brand}
        />
        <Input
          type='text'
          label='Modelo'
          id='model'
          placeholder={announcement.model}
          {...register('model')}
          error={errors.model}
        />
        <div className='content__year-fuel'>
          <Input
            type='text'
            label='Ano'
            id='year'
            placeholder={announcement.year}
            {...register('year')}
            error={errors.year}
          />
          <Input
            type='text'
            label='Combustível'
            id='fuel'
            placeholder={announcement.fuel}
            {...register('fuel')}
            error={errors.fuel}
          />
        </div>
        <div className='content__km-color'>
          <Input
            type='text'
            label='Quilometragem'
            id='km'
            placeholder={announcement.km.toString()}
            {...register('km')}
            error={errors.km}
          />
          <Input
            type='text'
            label='Cor'
            id='color'
            placeholder={announcement.color}
            {...register('color')}
            error={errors.color}
          />
        </div>
        <div className='content__table_price-price'>
          <Input
            type='text'
            label='Preço tabela FIPE'
            id='table_price'
            placeholder={`R$ ${announcement.table_price.toString()}`}
            {...register('table_price')}
            error={errors.table_price}
          />
          <Input
            type='text'
            label='Preço'
            id='price'
            placeholder={`R$ ${announcement.price.toString()}`}
            {...register('price')}
            error={errors.price}
          />
        </div>
        <div className='content__textarea'>
          <Label htmlFor='description' name='Descrição' />
          <TextareaStyle
            id='description'
            placeholder={announcement.description}
            disabled={loading}
            {...register('description')}
          />
        </div>

        {/* -> Será implementado */}
        {/* <>
          <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
            Publicado
          </StyledTexts>
          <RadioButtonDivStyles>
            <RadioInput
              type='radio'
              id='true'
              label='Sim'
              value={true}
              defaultChecked={true}
              {...register('announcement_is_active')}
            />
            <RadioInput
              type='radio'
              id='false'
              label='Não'
              value={false}
              {...register('announcement_is_active')}
            />
          </RadioButtonDivStyles>
        </> */}

        <Input
          type='text'
          label='Imagem de capa'
          id='cover_image_url'
          placeholder={announcement.cover_image_url}
          {...register('cover_image_url')}
          error={errors.cover_image_url}
        />
        {/* Renderizar inputs (imagem da galeria) de forma dinâmica */}
        {inputImage.map((input, index) => (
          <Input
            key={input}
            id={`images${input}`}
            label={`${input}ª Imagem da galeria`}
            type='text'
            placeholder={announcement.images[index].image_url}
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
            onClick={() => destroyAnnouncement()}
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
