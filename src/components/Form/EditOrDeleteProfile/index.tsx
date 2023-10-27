import { useContext } from 'react';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { UserContext } from '../../../providers/User/UserContext';
import { ModalContext } from '../../../providers/Modal/ModalContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TRegisterValidator,
  editUserSchema,
} from '../RegisterForm/register.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';
import { Label } from '../../Label';
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { TextareaStyle } from '../../Textarea/style';
import { Button } from '../../Button';
import {
  TUserRegisterRequest,
  TUserUpdate,
} from '../../../interfaces/user.interfaces';
// import { userUpdateSchema } from '../../../schemas/user.schema';

export const EditOrDeleteProfile = () => {
  const userToken = localStorage.getItem('@user:token');
  const userId = localStorage.getItem('@user:id');
  const { user } = useContext(AuthContext);
  const { updateUserProfileOrAddress, deleteUser } = useContext(UserContext);
  const { setIsEditOrDeleteProfileModalOpen } = useContext(ModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValidator>({
    // resolver: zodResolver(userUpdateSchema),
    resolver: zodResolver(editUserSchema),
  });

  const submit: SubmitHandler<TUserRegisterRequest> = (
    formData: TUserUpdate
  ) => {
    const data = editUserSchema.parse(formData);

    if (user && userToken && user.id === userId) {
      {
        formData.name === '' ? (formData.name = user.name) : formData.name;
      }
      {
        formData.email === '' ? (formData.email = user.email) : formData.email;
      }
      {
        formData.phone_number === ''
          ? (formData.phone_number = user.phone_number)
          : formData.phone_number;
      }
      {
        formData.birth_date === ''
          ? (formData.birth_date = user.birth_date)
          : formData.birth_date;
      }
      {
        formData.description === ''
          ? (formData.description = user.description)
          : formData.description;
      }

      updateUserProfileOrAddress(data, user.id);
      setIsEditOrDeleteProfileModalOpen(false);
    }
  };

  const destroyProfile = () => {
    if (user && userToken && user.id === userId) deleteUser(user.id);
    setIsEditOrDeleteProfileModalOpen(false);
  };

  return (
    <>
      <ModelForm titleForm='Editar perfil' onSubmit={handleSubmit(submit)}>
        <nav>
          <button onClick={() => setIsEditOrDeleteProfileModalOpen(false)}>
            X
          </button>
        </nav>
        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações pessoais
        </StyledTexts>
        <Input
          type='text'
          label='Nome'
          id='name'
          placeholder={user?.name}
          defaultValue={user?.name}
          {...register('name')}
          error={errors.name}
        />
        <Input
          type='text'
          label='Email'
          id='name'
          placeholder={user?.email}
          defaultValue={user?.email}
          {...register('email')}
          error={errors.email}
        />
        <Input
          type='text'
          label='CPF'
          id='cpf'
          placeholder={user?.cpf}
          defaultValue={user?.cpf}
          disabled={true}
          {...register('cpf')}
          error={errors.cpf}
        />
        <Input
          type='text'
          label='Celular'
          id='phone_number'
          placeholder={user?.phone_number}
          defaultValue={user?.phone_number}
          {...register('phone_number')}
          error={errors.phone_number}
        />
        <Input
          type='date'
          label='Data de nascimento'
          placeholder={user?.birth_date}
          defaultValue={user?.birth_date}
          pattern='\d{4}-\d{2}-\d{2}'
          id='birth_date'
          {...register('birth_date')}
          error={errors.birth_date}
        />

        <div className='content__textarea'>
          <Label htmlFor='description' name='Descrição' />
          <TextareaStyle
            id='description'
            placeholder={user?.description}
            defaultValue={user?.description}
            {...register('description')}
          />
        </div>
        <section className='buttons__section'>
          <Button
            className={'cancel__button'}
            text={' Cancelar'}
            type='button'
            onClick={() => setIsEditOrDeleteProfileModalOpen(false)}
          />
          <Button
            className={'delete-profile__button'}
            text={'Excluir Perfil'}
            type='button'
            onClick={() => destroyProfile()}
          />
          <Button
            className={'update-profile__button'}
            text={'Salvar alterações'}
            type='submit'
          />
        </section>
      </ModelForm>
    </>
  );
};
