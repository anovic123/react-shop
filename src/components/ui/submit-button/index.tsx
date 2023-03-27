import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import s from './style.module.scss';

interface SubmitButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
  disabled?: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  backgroundColor,
  disabled,
  ...props
}) => {
  return (
    <button
      className={s.button}
      style={{ background: `${backgroundColor}` }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
