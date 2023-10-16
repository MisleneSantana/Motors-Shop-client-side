import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { UserContext } from '../../../providers/User/UserContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TRegisterRequest,
  editUserSchema,
} from '../RegisterForm/register.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';
import { TextArea } from '../../Textarea';

export const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const { updateUserProfileOrAddress, deleteUser } = useContext(UserContext);
  const { closeModal } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterRequest>({
    resolver: zodResolver(editUserSchema),
  });

  const submit: SubmitHandler<TRegisterRequest> = (formData) => {
    const data = editUserSchema.parse(formData);
    if (user) updateUserProfileOrAddress(data, user.id);
    closeModal();
  };

  const destroyProfile = () => {
    if (user) deleteUser(user.id);
    closeModal();
  };

  return (
    <div>
      <nav>
        <h2>Editar perfil</h2>
        <button onClick={() => closeModal()}>X</button>
      </nav>
      <form onSubmit={handleSubmit(submit)}>
        <h4>Informações pessoais</h4>
        <Input
          type='text'
          label='Nome'
          value={user?.name}
          id='name'
          placeholder={user?.name}
          {...register('name')}
          error={errors.name}
        />
        <Input
          type='text'
          label='Email'
          value={user?.email}
          id='name'
          placeholder={user?.email}
          {...register('email')}
          error={errors.email}
        />
        <Input
          type='cpf'
          label='CPF'
          value={user?.cpf}
          id='cpf'
          placeholder={user?.cpf}
          {...register('cpf')}
          error={errors.cpf}
        />
        <Input
          type='phone_number'
          label='Celular'
          value={user?.phone_number}
          id='phone_number'
          placeholder={user?.phone_number}
          {...register('phone_number')}
          error={errors.phone_number}
        />
        <Input
          type='birth_date'
          label='Data de nascimento'
          value={user?.birth_date}
          id='birth_date'
          placeholder={user?.birth_date}
          {...register('birth_date')}
          error={errors.birth_date}
        />
        <TextArea
          id='description'
          label='Descrição'
          value={user?.description}
          placeholder={user?.description}
          {...register('description')}
        />
        <div>
          <button type='button' onClick={() => closeModal()}>
            Cancelar
          </button>
          <button type='button' onClick={() => destroyProfile()}>
            Excluir Perfil
          </button>
          <button type='submit'>Salvar alterações</button>
        </div>
      </form>
    </div>
  );
};
