import { ForwardedRef, forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IRadioButtonProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string | boolean | number;
  defaultChecked?: boolean;
  error?: FieldError;
}

export const RadioInput = forwardRef(
  (
    { label, id, value, defaultChecked, error, ...rest }: IRadioButtonProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          ref={ref}
          type='radio'
          id={id}
          value={value}
          defaultChecked={defaultChecked}
          {...rest}
        />
        {label ? <label htmlFor={id}>{label}</label> : null}
        {error ? <p>{'Selecione o perfil da conta'}</p> : null}
      </>
    );
  }
);
