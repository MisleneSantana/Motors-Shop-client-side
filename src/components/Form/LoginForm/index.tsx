import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { LoginFormSchema, TLoginFormSchema } from './LoginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';

export const LoginForm = () => {
  const route = useLocation();
  const location = `${route.pathname}`;

  const [loading, setLoading] = useState(false);
  // const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });

  const submit: SubmitHandler<TLoginFormSchema> = (formData) => {
    // signIn(formData, setLoading);
  };
  if (location === '/signin') {
    return (
      <form onSubmit={handleSubmit(submit)}>
        <h1>Faça login na sua conta</h1>
        <Input
          id='login'
          type='email'
          disabled={loading}
          label='Email'
          {...register('email')}
        />
        {errors ? <span>{errors.email?.message}</span> : null}
        <Input
          id='senha'
          type='password'
          label='Senha'
          {...register('password')}
        />
        {errors ? <span>{errors.password?.message}</span> : null}
        <button type='submit' disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    );
  }
  if (location === '/login') {
    return (
      <form onSubmit={handleSubmit(submit)}>
        <h1>Login</h1>
        <Input
          id='login'
          type='email'
          disabled={loading}
          label='Email'
          placeholder='Digitar email'
          {...register('email')}
        />
        {errors ? <p>{errors.email?.message}</p> : null}
        <Input
          id='senha'
          type='password'
          label='Senha'
          placeholder='Digitar senha'
          {...register('password')}
        />
        {errors ? <p>{errors.password?.message}</p> : null}
        <button type='submit' disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    );
  }
  return null;
};
