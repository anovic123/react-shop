import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import s from './style.module.scss';

interface SubmitButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, ...props }) => {
  return (
    <button className={s.button} {...props}>
      {children}
    </button>
  );
};
