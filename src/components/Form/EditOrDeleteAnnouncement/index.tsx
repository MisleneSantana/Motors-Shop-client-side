import { useContext, useState } from 'react';
import { AnnouncementContext } from '../../../providers/Announcement/AnnouncementContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { Input } from '../../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TAnnouncementValidator,
  announcementValidator,
} from '../CreateAnnouncement/announcement.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { TAnnouncementUpdate } from '../../../interfaces/announcement.interfaces';
import { TextArea } from '../../Textarea';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';

export const EditOrDeleteAnnouncement = () => {
  const [inputImage, setInputImage] = useState(2);
  const { openModal, closeModal } = useContext(ModalContext);
  const { loading } = useContext(LoadingContext);
  const { singleAnnouncement } = useContext(AnnouncementContext);
  const { updateAnnouncement, deleteAnnouncement } =
    useContext(AnnouncementContext);

  const renderImageInputs = () => {
    const inputsImages: React.JSX.Element[] = [];
    for (let i = 1; i <= inputImage; i++) {
      inputsImages.push(
        <section key={i}>
          <Input
            type='text'
            label={`${i} Imagem da galeria`}
            placeholder='https://image.com'
            id='image_url'
            error={
              errors?.images?.[i] && (
                <p>{`* ${errors.images[i]?.image_url?.message}`}</p>
              )
            }
          />
        </section>
      );
    }
    return inputsImages;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAnnouncementValidator>({
    resolver: zodResolver(announcementValidator),
  });

  const submit: SubmitHandler<TAnnouncementUpdate> = (formData) => {
    if (singleAnnouncement) updateAnnouncement(formData, singleAnnouncement.id);
    openModal();
  };

  const destroyAnnouncement = () => {
    if (singleAnnouncement) deleteAnnouncement(singleAnnouncement.id);
    closeModal();
  };

  return (
    <div>
      <nav>
        <h2>Editar anúncio</h2>
        <button onClick={() => closeModal()}>X</button>
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
        <div>
          <TextArea
            label='Descrição'
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
        {renderImageInputs()}
        <button type='button' onClick={() => setInputImage(inputImage + 1)}>
          'Adicionar campo para imagem da galeria'
        </button>
        <button onClick={() => destroyAnnouncement()}>Excluir anúncio</button>
        <button type='submit'>
          {loading ? 'Salvando' : 'Salvar as alterações'}
        </button>
      </form>
    </div>
  );
};
