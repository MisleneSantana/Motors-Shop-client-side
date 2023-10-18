import { FieldError } from 'react-hook-form';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: 'text' | 'email' | 'password';
  error?: FieldError;
  placeholder?: string;
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
      value,
      disabled,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          ref={ref}
          placeholder={placeholder}
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          {...rest}
        />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
