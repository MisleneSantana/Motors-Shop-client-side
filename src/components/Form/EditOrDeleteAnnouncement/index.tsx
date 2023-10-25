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

export const EditOrDeleteAnnouncement = () => {
  const [inputImage, setInputImage] = useState([1, 2]);
  const { loading } = useContext(LoadingContext);
  const { setIsEditOrDeleteAdsModalOpen, setIsConfirmDeleteAdModalOpen } =
    useContext(ModalContext);
  const { singleAnnouncement, updateAnnouncement } =
    useContext(AnnouncementContext);

  // const renderImageInputs = () => {
  //   const inputsImages: React.JSX.Element[] = [];
  //   for (let i = 1; i <= inputImage; i++) {
  //     inputsImages.push(
  //       <section key={i}>
  //         <Input
  //           type='text'
  //           label={`${i}º Imagem da galeria`}
  //           placeholder='https://image.com'
  //           id='image_url'
  //           error={
  //             errors?.images?.[i] && (
  //               <p>{`* ${errors.images[i]?.image_url?.message}`}</p>
  //             )
  //           }
  //         />
  //       </section>
  //     );
  //   }
  //   return inputsImages;
  // };

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
    if (singleAnnouncement) updateAnnouncement(formData, singleAnnouncement.id);
    setIsEditOrDeleteAdsModalOpen(false);
  };

  return (
    <div role='dialog'>
      <nav>
        <h2>Editar anúncio</h2>
        <button onClick={() => setIsEditOrDeleteAdsModalOpen(false)}>X</button>
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
          onClick={createInputImage}
          type='button'
          disabled={inputImage.length == 6 ? true : false}
          text='Adicionar campo para imagem da galeria'
        />

        <section>
          <Button
            text=' Excluir anúncio'
            onClick={() => setIsConfirmDeleteAdModalOpen(true)}
          />
          <Button
            type='submit'
            text={loading ? 'Salvando' : 'Salvar as alterações'}
          />
        </section>
      </form>
    </div>
  );
};
