interface IButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  color?: string;
  text: string;
  value?: any;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  type,
  color,
  text,
  value,
  onClick,
  disabled,
  className,
}: IButtonProps) => {
  return (
    <button
      type={type}
      color={color}
      value={value}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>
  );
};
