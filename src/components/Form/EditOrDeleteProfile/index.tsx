import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { UserContext } from '../../../providers/User/UserContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TRegisterRequestValidator,
  editUserSchema,
} from '../RegisterForm/register.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';
import { Label } from '../../Label';

export const EditOrDeleteProfile = () => {
  const { user } = useContext(AuthContext);
  const { updateUserProfileOrAddress, deleteUser } = useContext(UserContext);
  const { setIsEditOrDeleteProfileModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterRequestValidator>({
    resolver: zodResolver(editUserSchema),
  });

  const submit: SubmitHandler<TRegisterRequestValidator> = (formData) => {
    const data = editUserSchema.parse(formData);
    if (user) updateUserProfileOrAddress(data, user.id);
    setIsEditOrDeleteProfileModalOpen(false);
  };

  const destroyProfile = () => {
    if (user) deleteUser(user.id);
    setIsEditOrDeleteProfileModalOpen(false);
  };

  return (
    <>
      <nav>
        <h2>Editar perfil</h2>
        <button onClick={() => setIsEditOrDeleteProfileModalOpen(false)}>
          X
        </button>
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
          type='text'
          label='CPF'
          value={user?.cpf}
          id='cpf'
          placeholder={user?.cpf}
          {...register('cpf')}
          error={errors.cpf}
        />
        <Input
          type='text'
          label='Celular'
          value={user?.phone_number}
          id='phone_number'
          placeholder={user?.phone_number}
          {...register('phone_number')}
          error={errors.phone_number}
        />
        <Input
          type='text'
          label='Data de nascimento'
          value={user?.birth_date}
          id='birth_date'
          placeholder={user?.birth_date}
          {...register('birth_date')}
          error={errors.birth_date}
        />
        <div>
          <Label htmlFor='description' name='Descrição' />
          <textarea
            id='description'
            value={user?.description}
            placeholder={user?.description}
            {...register('description')}
          />
          {errors.description?.message && <p>{errors.description?.message}</p>}
        </div>
        <div>
          <button
            type='button'
            onClick={() => setIsEditOrDeleteProfileModalOpen(false)}
          >
            Cancelar
          </button>
          <button type='button' onClick={() => destroyProfile()}>
            Excluir Perfil
          </button>
          <button type='submit'>Salvar alterações</button>
        </div>
      </form>
    </>
  );
};
