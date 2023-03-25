import { FC } from 'react';
import { IAuth } from '../../../common/types/auth';

import s from '../style.module.scss';

export const Login: FC<IAuth> = ({ navigate, register, errors }) => {
  return (
    <>
      <h1 className={s.title}>Авторизация</h1>
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>
          Почта:
        </label>
        <input type="email" className={s.input} {...register('email')} />
        {errors && <div className={s.error}>{errors.name?.email}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Пароль:
        </label>
        <input type="password" className={s.input} {...register('password')} />
        {errors && <div className={s.error}>{errors.name?.password}</div>}
      </div>
      <button type="submit" className={s.button}>
        Войти
      </button>
      <p className={s.link}>
        У вас нет аккаунта?{' '}
        <span className={s.incitingText} onClick={() => navigate('/register')}>
          Регистрация
        </span>
      </p>
    </>
  );
};
