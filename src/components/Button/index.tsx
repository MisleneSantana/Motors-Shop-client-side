interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  type,
  text,
  className,
  onClick,
  disabled,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
