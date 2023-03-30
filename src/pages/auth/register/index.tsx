import { FC } from 'react';

import { IAuth } from '../../../common/types/auth';

import s from '../style.module.scss';

export const Register: FC<IAuth> = ({ errors, register, navigate }) => {
  return (
    <>
      <h1 className={s.title}>Sign up</h1>{' '}
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>
          Email
        </label>
        <input type="email" className={s.input} {...register('email')} />
        {errors && <div className={s.error}>{errors.email?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="name" className={s.label}>
          Username
        </label>
        <input type="text" className={s.input} {...register('name')} />
        {errors && <div className={s.error}>{errors.name?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Password
        </label>
        <input type="password" className={s.input} {...register('password')} />
        {errors && <div className={s.error}>{errors.password?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>
          Repeat your password
        </label>
        <input type="password" className={s.input} {...register('confirmPassword')} />
        {errors && <div className={s.error}>{errors.password?.message}</div>}
      </div>
      <div className={s.formGroup}>
        <label htmlFor="avatar" className={s.label}>
          Avatar URL
        </label>
        <input type="text" className={s.input} {...register('avatar')} />
        {errors && <div className={s.error}>{errors.avatar?.message}</div>}
      </div>
      <button type="submit" className={s.button}>
        Register
      </button>
      <p className={s.link}>
        You have an account?
        <span className={s.incitingText} onClick={() => navigate('/login')}>
          Sign in
        </span>
      </p>
    </>
  );
};
