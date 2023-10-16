import { UseFormRegisterReturn } from 'react-hook-form';

interface iTextAreaProps {
  id: string;
  label: string;
  placeholder: string | undefined;
  value?: string;
  register?: UseFormRegisterReturn<string> | undefined;
}

export const TextArea = ({
  id,
  value,
  placeholder,
  register,
}: iTextAreaProps) => {
  return (
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      {...register}
    ></textarea>
  );
};
