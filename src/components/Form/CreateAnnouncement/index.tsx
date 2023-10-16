import { useContext } from 'react';
import { AnnouncementContext } from '../../../providers/Announcement/AnnouncementContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { useParams } from 'react-router-dom';
import {
  TAnnouncementValidator,
  announcementValidator,
} from './announcement.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { IAnnouncementRequest } from '../../../schemas/announcement.schema';
import { SubmitHandler, useForm } from 'react-hook-form';

export const CreateAnnouncement = () => {
  const { createAnnouncement, getAnnouncementsBySeller } =
    useContext(AnnouncementContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAnnouncementValidator>({
    resolver: zodResolver(announcementValidator),
  });

  const submit: SubmitHandler<IAnnouncementRequest> = (formData) => {
    createAnnouncement(formData);
  };

  // Formatar Marca/Modelo/Spec
  formData.brand =
    formData.brand.split('')[0].toUpperCase() + formData.brand.substring(1);
  formData.spec =
    formData.model.split('')[0].toUpperCase() + formData.model.substring(1);
  formData.model =
    formData.model.split(' ')[0].split('')[0].toUpperCase() +
    formData.model.split(' ')[0].substring(1);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h4>Informações do veículo</h4>

      <label>Marca</label>
      <select
        className={errors.brand ? 'err' : ''}
        {...register('brand')}
        onChange={(e) => setValue('brand', e.target.value)}
      >
        <option value=''>
          {brands ? 'Selecione uma marca' : 'carregando...'}
        </option>
        {brands &&
          brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
      </select>
      <label>Modelo</label>
      <select
        className={errors.model ? 'err' : ''}
        {...register('model', {
          disabled: carBrand ? false : true,
        })}
        onChange={(e) => setValue('model', e.target.value)}
      >
        <option value=''>
          {models ? 'Selecione um modelo' : 'carregando...'}
        </option>
        {models &&
          models.map((model) => {
            return (
              <option key={model.id} value={model.name}>
                {model.name}
              </option>
            );
          })}
      </select>
      <div>
        <Input
          id='year'
          label='Ano'
          placeholder='Qual o Ano?'
          type='text'
          readOnly={carModel ? true : false}
          {...register('year')}
        />
        <Input
          id='fuel'
          label='Combustível'
          placeholder='Qual o tipo de combustível?'
          type='text'
          readOnly={carModel ? true : false}
          {...register('fuel')}
        />
      </div>
      <div>
        <Input
          id='km'
          label='Quilometragem'
          placeholder='Qual a Quilometragem?'
          type='number'
          className={errors.km ? 'err' : ''}
          errorMessage={errors.km?.message}
          {...register('km')}
          required
        />
        <Input
          id='color'
          label='Cor'
          placeholder='Qual a Cor?'
          type='text'
          className={errors.color ? 'err' : ''}
          errorMessage={errors.color?.message}
          {...register('color')}
          required
        />
      </div>
      <div>
        <Input
          id='fipe'
          label='Preço tabela FIPE'
          placeholder='Qual o valor Fipe?'
          type='text'
          readOnly={carModel ? true : false}
          {...register('fipe')}
        />
        <Input
          id='price'
          label='Preço'
          placeholder='Deseja vender por quanto?'
          type='number'
          className={errors.price ? 'err' : ''}
          errorMessage={errors.price?.message}
          {...register('price')}
          required
        />
      </div>

      <label>Descrição</label>
      <textarea
        id='description'
        placeholder='Faça uma breve descrição do veículo'
        {...register('description')}
      />

      <h4>Publicado</h4>
      <RadioButtonDivStyles>
        <RadioButton
          id='published'
          label='Sim'
          value={1}
          defaultChecked
          {...register('is_published')}
        />
        <RadioButton
          id='not_published'
          label='Não'
          value={0}
          {...register('is_published')}
        />
      </RadioButtonDivStyles>

      <Input
        id='image'
        label='Imagem da capa'
        placeholder='Adicione uma imágem aqui'
        type='file'
        multiple
        {...register('image')}
      />

      <div className='flex_end'>
        <StyledButton
          buttonsize='big'
          buttonstyle='negative'
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Cancelar
        </StyledButton>
        <StyledButton buttonsize='form' buttonstyle='brand1' type='submit'>
          {reqLoading ? <LoadingRing /> : 'Criar anúncio'}
        </StyledButton>
      </div>
    </form>
  );
};
