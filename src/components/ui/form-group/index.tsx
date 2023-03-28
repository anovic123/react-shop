import { FC, ChangeEvent } from 'react';

import s from './style.module.scss';

interface FormGroupProps {
  name: string;
  type: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormGroup: FC<FormGroupProps> = ({ name, type, value, onChange }) => {
  return (
    <div className={s.formGroup}>
      <label className={s.label} htmlFor={name}>{name}</label>
      <input type={type} name={name} className={s.input} value={value} onChange={onChange} />
    </div>
  );
};
