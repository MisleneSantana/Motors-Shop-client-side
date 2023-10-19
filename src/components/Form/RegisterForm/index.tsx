import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TRegisterValidator, registerValidator } from './register.validator';
import { RadioInput } from '../../RadioInput';
import { Input } from '../../Input';
import { UserContext } from '../../../providers/User/UserContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { TUserRegisterRequest } from '../../../interfaces/user.interfaces';
import { Label } from '../../Label';

export const RegisterForm = () => {
  const { loading } = useContext(LoadingContext);
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValidator>({
    resolver: zodResolver(registerValidator),
  });

  const submit: SubmitHandler<TUserRegisterRequest> = (formData) => {
    registerUser(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Cadastro</h1>
        <h3>Informações pessoais</h3>
        <Input
          type='text'
          label='Nome'
          placeholder='Ex: Samuel Leão'
          id='name'
          disabled={loading}
          {...register('name')}
          error={errors.name}
        />
        <Input
          type='email'
          label='Email'
          placeholder='Ex: samuel@mail.com.br'
          id='email'
          disabled={loading}
          {...register('email')}
          error={errors.email}
        />
        <Input
          type='text'
          label='CPF'
          placeholder='000.000.000-00'
          id='cpf'
          disabled={loading}
          {...register('cpf')}
          error={errors.cpf}
        />
        <Input
          type='text'
          label='Celular'
          placeholder='(DDD) 90000-0000'
          id='phone_number'
          disabled={loading}
          {...register('phone_number')}
          error={errors.phone_number}
        />
        <Input
          type='text'
          label='Data de nascimento'
          placeholder='00/00/00'
          id='birth_date'
          disabled={loading}
          {...register('birth_date')}
          error={errors.birth_date}
        />
        <div>
          <Label htmlFor='description' name='Descrição' />
          <textarea
            placeholder='Digitar descrição'
            id='description'
            disabled={loading}
            {...register('description')}
          />
        </div>
        <h3>Informações de endereço</h3>
        <Input
          type='text'
          label='CEP'
          placeholder='00000.000'
          id='cep'
          disabled={loading}
          {...register('address.cep')}
          error={errors.address?.cep}
        />
        <div>
          <Input
            type='text'
            label='Estado'
            placeholder='Digitar estado'
            id='state'
            disabled={loading}
            {...register('address.state')}
            error={errors.address?.state}
          />
          <Input
            type='text'
            label='Cidade'
            placeholder='Digitar cidade'
            id='city'
            disabled={loading}
            {...register('address.city')}
            error={errors.address?.city}
          />
        </div>
        <Input
          type='text'
          label='Rua'
          placeholder='Digitar rua'
          id='street'
          disabled={loading}
          {...register('address.street')}
          error={errors.address?.street}
        />
        <div>
          <Input
            type='text'
            label='Número'
            placeholder='Digitar número'
            id='number'
            disabled={loading}
            {...register('address.number')}
            error={errors.address?.number}
          />
          <Input
            type='text'
            label='Complemento'
            placeholder='Ex: apart 307'
            id='complement'
            disabled={loading}
            {...register('address.complement')}
            error={errors.address?.complement}
          />
        </div>
        <>
          <h3>Tipo de conta</h3>
          <div>
            <RadioInput
              type='radio'
              id='buyer'
              label='Comprador'
              value={'buyer'}
              {...register('account_type')}
            />
            <RadioInput
              type='radio'
              id='seller'
              label='Anunciante'
              value={'seller'}
              {...register('account_type')}
            />
          </div>
        </>
        <Input
          type='password'
          label='Senha'
          placeholder='Digitar senha'
          id='password'
          {...register('password')}
          disabled={loading}
          error={errors.password}
        />
        <Input
          type='password'
          label='Confirmar senha'
          placeholder='Confirmar senha'
          id='confirmPassword'
          disabled={loading}
          {...register('confirmPassword')}
          error={errors.confirmPassword}
        />
        <button type='submit'>Finalizar cadastro</button>
      </form>
    </div>
  );
};
