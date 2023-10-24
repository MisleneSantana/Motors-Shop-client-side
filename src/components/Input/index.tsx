import { FieldError } from 'react-hook-form';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { InputStyle } from './style';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: 'text' | 'email' | 'password' | 'date';
  error?: FieldError;
  placeholder?: string;
  pattern?: string;
  value?: string;
  disabled?: boolean;
}

export const Input = forwardRef(
  (
    {
      label,
      id,
      type,
      error,
      placeholder,
      pattern,
      value,
      disabled,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputStyle>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          ref={ref}
          placeholder={placeholder}
          pattern={pattern}
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          {...rest}
        />
        {error ? <p>{error.message}</p> : null}
      </InputStyle>
    );
  }
);
