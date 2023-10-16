import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { UserContext } from '../../../providers/User/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TRegisterRequest,
  editUserSchema,
} from '../RegisterForm/register.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { addressSchema } from './address.validator';
import { Input } from '../../Input';

export const EditAddress = () => {
  const { user } = useContext(AuthContext);
  const { updateUserProfileOrAddress } = useContext(UserContext);
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterRequest>({
    resolver: zodResolver(addressSchema),
  });

  const submit: SubmitHandler<TRegisterRequest> = (formData) => {
    const data = editUserSchema.parse(formData);
    if (user) updateUserProfileOrAddress(data, user.id);
    closeModal();
  };

  return (
    <div>
      <nav>
        <h2>Editar endereço</h2>
        <button onClick={() => closeModal()}>X</button>
      </nav>
      <form onSubmit={handleSubmit(submit)}>
        <h4>Informações pessoais</h4>
        <section>
          <Input
            type='cep'
            label='CEP'
            value={user?.address.cep}
            id='cep'
            placeholder={user?.address.cep}
            {...register('address.cep')}
            error={errors.address?.cep}
          />
          <div>
            <Input
              type='state'
              label='Estado'
              value={user?.address.state}
              id='state'
              placeholder={user?.address.state}
              {...register('address.state')}
              error={errors.address?.state}
            />
            <Input
              type='city'
              label='Cidade'
              value={user?.address.city}
              id='city'
              placeholder={user?.address.city}
              {...register('address.city')}
              error={errors.address?.city}
            />
          </div>
          <Input
            type='street'
            label='Rua'
            value={user?.address.street}
            id='street'
            placeholder={user?.address.street}
            {...register('address.street')}
            error={errors.address?.street}
          />
          <div>
            <Input
              type='number'
              label='Número'
              value={user?.address.number}
              id='number'
              placeholder={user?.address.number}
              {...register('address.number')}
              error={errors.address?.number}
            />
            <Input
              type='complement'
              label='Complemento'
              value={user?.address.complement}
              id='complement'
              placeholder={user?.address.complement}
              {...register('address.complement')}
              error={errors.address?.complement}
            />
          </div>
        </section>
        <section>
          <button onClick={() => closeModal()}>Cancelar</button>
          <button type='submit'>Salvar alterações</button>
        </section>
      </form>
    </div>
  );
};
