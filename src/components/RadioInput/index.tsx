import { ForwardedRef, forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';

export interface IRadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string | number;
  defaultChecked?: boolean;
}


export const RadioInput = forwardRef(
  ({ label, id, value, defaultChecked, ...rest }: IRadioButtonProps, ref:  ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <input
          type='radio'
          id={id}
          ref={ref}
          value={value}
          defaultChecked={defaultChecked}
          {...rest}
        />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </>
    );
  }
);
