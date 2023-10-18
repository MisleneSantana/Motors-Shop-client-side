import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { LoginFormSchema, TLoginFormSchema } from './login.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { Button } from '../../Button';

export const LoginForm = () => {
  const route = useLocation();
  const location = `${route.pathname}`;

  const { login } = useContext(AuthContext);
  const { loading } = useContext(LoadingContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TLoginFormSchema>({ resolver: zodResolver(LoginFormSchema) });

  const submit: SubmitHandler<TLoginFormSchema> = (formData) => {
    login(formData);
    setValue('email', '');
    setValue('password', '');
  };
  if (location === '/login') {
    return (
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <h1>Login</h1>
          <label htmlFor='email'>Email</label>
          <Input
            id='login'
            type='email'
            disabled={loading}
            placeholder='Digitar email'
            {...register('email')}
            error={errors.email}
          />
          <label htmlFor='password'>Senha</label>
          <Input
            id='senha'
            type='password'
            disabled={loading}
            placeholder='Digitar senha'
            {...register('password')}
            error={errors.email}
          />
          <div>
            <Link to='/resetPassword'>Esqueci minha senha</Link>
          </div>
          <div>
            <Button
              type='submit'
              disabled={loading}
              text={loading ? 'Entrando...' : 'Entrar'}
            />
            <p>Ainda não possui conta?</p>
            <Link to='/register'>Cadastrar</Link>
          </div>
        </form>
      </div>
    );
  }
  return null;
};
