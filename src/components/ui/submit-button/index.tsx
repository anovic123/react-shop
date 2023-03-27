import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import s from './style.module.scss';

interface SubmitButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  backgroundColor?: string;
}

export const SubmitButton: FC<SubmitButtonProps> = ({ children, backgroundColor, ...props }) => {
  return (
    <button className={s.button} style={{ background: `${backgroundColor}` }} {...props}>
      {children}
    </button>
  );
};
