import { FieldError } from "react-hook-form";
import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";


export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

export const Input = forwardRef(
  ({ label, id, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </input>
    );
  }
);
