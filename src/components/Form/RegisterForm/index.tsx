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
import { Button } from '../../Button';
import { validateCPF } from './validateCPF';
import { DivFormStyle } from './style';
import { ModelForm } from '../ModelForm';
import { StyledTexts } from '../../../styles/typography';
import { TextareaStyle } from '../../Textarea/style';
import { RadioButtonDivStyles } from '../../RadioInput/style';

export const RegisterForm = () => {
  const { loading } = useContext(LoadingContext);
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TRegisterValidator>({
    resolver: zodResolver(registerValidator),
  });

  const submit: SubmitHandler<TUserRegisterRequest> = (formData) => {
    const validatedCPF: boolean = validateCPF(formData.cpf);
    if (validatedCPF) {
      const replaceCPF = formData.cpf
        .replace('.', '')
        .replace('-', '')
        .replace(/\D/g, '')
        .trim();

      const newObjUser = { ...formData, cpf: replaceCPF };
      registerUser(newObjUser);

      setValue('name', '');
      setValue('email', '');
      setValue('cpf', '');
      setValue('phone_number', '');
      setValue('birth_date', '');
      setValue('description', '');
      setValue('account_type', '');
      setValue('password', '');
      setValue('address.number', '');
      setValue('address.cep', '');
      setValue('address.state', '');
      setValue('address.city', '');
      setValue('address.street', '');
      setValue('address.complement', '');
    }
  };

  return (
    <DivFormStyle>
      <ModelForm titleForm='Cadastro' onSubmit={handleSubmit(submit)}>
        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações pessoais
        </StyledTexts>
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
          placeholder='123.456.789-01'
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
          type='date'
          label='Data de nascimento'
          placeholder='DD/MM/AAAA'
          pattern='\d{4}-\d{2}-\d{2}'
          id='birth_date'
          disabled={loading}
          {...register('birth_date')}
          error={errors.birth_date}
        />
        <div className='content__textarea'>
          <Label htmlFor='description' name='Descrição' />
          <TextareaStyle
            placeholder='Digitar descrição'
            id='description'
            disabled={loading}
            {...register('description')}
          />
        </div>

        <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
          Informações de endereço
        </StyledTexts>
        <Input
          type='text'
          label='CEP'
          placeholder='12345-678'
          id='cep'
          disabled={loading}
          {...register('address.cep')}
          error={errors.address?.cep}
        />
        <div className='content__state-city'>
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
        <div className='content__number-complement'>
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
          <StyledTexts tag='h3' $fontSize='heading_500_16' className='form__h3'>
            Tipo de conta
          </StyledTexts>
          <RadioButtonDivStyles>
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
              error={errors.account_type}
            />
          </RadioButtonDivStyles>
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
        <Button
          type={'submit'}
          disabled={loading}
          text={loading ? 'Cadastrando...' : 'Finalizar cadastro'}
        />
      </ModelForm>
    </DivFormStyle>
  );
};
