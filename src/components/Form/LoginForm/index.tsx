import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { LoginFormSchema, TLoginFormSchema } from './login.validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Input';
import { AuthContext } from '../../../providers/Auth/AuthContext';
import { LoadingContext } from '../../../providers/Loading/LoadingContext';
import { Button } from '../../Button';
import { DivFormStyle } from '../RegisterForm/style';
import { ModelForm } from '../ModelForm';
import { DivButtonRegisterStyle, DivResetPasswordStyle } from './style';

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
      <DivFormStyle>
        <ModelForm titleForm='Login' onSubmit={handleSubmit(submit)}>
          <Input
            id='email'
            type='email'
            label='Email'
            disabled={loading}
            placeholder='Digitar email'
            {...register('email')}
            error={errors.email}
          />
          <Input
            id='password'
            type='password'
            label='Senha'
            disabled={loading}
            placeholder='Digitar senha'
            {...register('password')}
            error={errors.password}
          />
          <DivResetPasswordStyle>
            <Link to='/resetPassword'>Esqueci minha senha</Link>
          </DivResetPasswordStyle>
          <Button
            type='submit'
            disabled={loading}
            text={loading ? 'Entrando...' : 'Entrar'}
          />
          <DivButtonRegisterStyle>
            <p>Ainda não possui conta?</p>
            <Link to='/register'>Cadastrar</Link>
          </DivButtonRegisterStyle>
        </ModelForm>
      </DivFormStyle>
    );
  }
  return null;
};
