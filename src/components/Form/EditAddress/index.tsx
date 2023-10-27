import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { UserContext } from '../../../providers/User/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TAddressRequest } from './address.validator';
import { Input } from '../../Input';
import { TUserUpdate } from '../../../interfaces/user.interfaces';
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { Button } from '../../Button';
// import { userAddressUpdateSchema } from '../../../schemas/address.schema';
// import { userUpdateSchema } from '../../../schemas/user.schema';
import { editUserSchema } from '../RegisterForm/register.validator';

export const EditAddress = () => {
  const userToken = localStorage.getItem('@user:token');
  const userId = localStorage.getItem('@user:id');
  const { user } = useContext(AuthContext);
  const { updateUserProfileOrAddress } = useContext(UserContext);
  const { setIsEditUserAddressModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddressRequest>({
    resolver: zodResolver(editUserSchema),
  });

  const submit: SubmitHandler<TAddressRequest> = (formData: TUserUpdate) => {
    const data = editUserSchema.parse(formData);

    if (user && userToken && user.id === userId)
      updateUserProfileOrAddress(data, user.id);
    setIsEditUserAddressModalOpen(false);
  };

  return (
    <>
      <ModelForm titleForm={'Editar endereço'} onSubmit={handleSubmit(submit)}>
        <nav>
          <button onClick={() => setIsEditUserAddressModalOpen(false)}>
            X
          </button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações pessoais
        </StyledTexts>
        <Input
          type='text'
          label='CEP'
          id='cep'
          placeholder={user?.address.cep}
          defaultValue={user?.address.cep}
          {...register('address.cep')}
          error={errors.address?.cep}
        />
        <div className='content__state-city'>
          <Input
            type='text'
            label='Estado'
            id='state'
            placeholder={user?.address.state}
            defaultValue={user?.address.state}
            {...register('address.state')}
            error={errors.address?.state}
          />
          <Input
            type='text'
            label='Cidade'
            id='city'
            placeholder={user?.address.city}
            defaultValue={user?.address.city}
            {...register('address.city')}
            error={errors.address?.city}
          />
        </div>
        <Input
          type='text'
          label='Rua'
          id='street'
          placeholder={user?.address.street}
          defaultValue={user?.address.street}
          {...register('address.street')}
          error={errors.address?.street}
        />
        <div className='content__number-complement'>
          <Input
            type='text'
            label='Número'
            id='number'
            placeholder={user?.address.number}
            defaultValue={user?.address.number}
            {...register('address.number')}
            error={errors.address?.number}
          />
          <Input
            type='text'
            label='Complemento'
            id='complement'
            placeholder={user?.address.complement}
            defaultValue={user?.address.complement}
            {...register('address.complement')}
            error={errors.address?.complement}
          />
        </div>
        <section className='buttons__section'>
          <Button
            className={'cancel__button'}
            text={' Cancelar'}
            onClick={() => setIsEditUserAddressModalOpen(false)}
          />
          <Button
            className={'update-address__button'}
            text={'Salvar alterações'}
            type='submit'
          />
        </section>
      </ModelForm>
    </>
  );
};
