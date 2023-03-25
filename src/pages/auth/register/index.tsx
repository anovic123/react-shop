import { FC } from 'react';

import s from '../style.module.scss';

interface RegisterProps {}

export const Register: FC<any> = ({ errors, register, navigate }) => {
  return (
    <>
      <h1 className={s.title}>Регистрация</h1>{' '}
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input type="email" name="email" className={s.input} {...register('email')} />
        {errors && <div className={s.error}>{errors.email?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="name" className={s.label}>
          Имя пользователя
        </label>
        <input type="text" name="name" className={s.input} {...register('name')} />
        {errors && <div className={s.error}>{errors.name?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Пароль
        </label>
        <input type="password" name="password" className={s.input} {...register('password')} />
        {errors && <div className={s.error}>{errors.name?.password}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Повторите ваш пароль
        </label>
        <input
          type="password"
          name="password"
          className={s.input}
          {...register('confirmPassword')}
        />
        {errors && <div className={s.error}>{errors.name?.password}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="avatar" className={s.label}>
          Аватар
        </label>
        <input type="text" name="avatar" className={s.input} {...register('avatar')} />
        {errors && <div className={s.error}>{errors.name?.avatar}</div>}
      </div>
      <button type="submit" className={s.button}>
        Зарегистрироваться
      </button>
      <p className={s.link}>
        У вас есть аккаунт?{' '}
        <span className={s.incitingText} onClick={() => navigate('/login')}>
          Авторизация
        </span>
      </p>
    </>
  );
};
