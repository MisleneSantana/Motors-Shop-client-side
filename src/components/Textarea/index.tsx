import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextAreaProps {
  id: string;
  placeholder: string | undefined;
  value?: string;
  register?: UseFormRegisterReturn<string>;
}

export const TextArea = ({
  id,
  placeholder,
  value,
  register,
}: ITextAreaProps) => {
  return (
    <div>
      <textarea
        name=''
        id={id}
        placeholder={placeholder}
        defaultValue={value}
        {...register}
      ></textarea>
    </div>
  );
};
