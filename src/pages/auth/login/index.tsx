import { FC } from 'react';
import { IAuth } from '../../../common/types/auth';

import s from '../style.module.scss';

export const Login: FC<IAuth> = ({ navigate, register, errors }) => {
  return (
    <>
      <h1 className={s.title}>Sign in</h1>
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>
          Email:
        </label>
        <input type="email" className={s.input} {...register('email')} />
        {errors && <div className={s.error}>{errors.email?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Password:
        </label>
        <input type="password" className={s.input} {...register('password')} />
        {errors && <div className={s.error}>{errors.password?.message}</div>}
      </div>
      <button type="submit" className={s.button}>
        Login
      </button>
      <p className={s.link}>
        Don't have an account?
        <span className={s.incitingText} onClick={() => navigate('/register')}>
          Register
        </span>
      </p>
    </>
  );
};
