import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { LoginSchema, RegisterSchema } from '../../utils/yup';

import { Login } from './login';
import { Register } from './register';
import { loginUser, registerUser } from '../../store/thunks/auth';

import { AppErrors } from '../../common/errors';

import s from './style.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export const AuthRoot: FC = ({}) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { status } = useAppSelector((state) => state.auth);
  console.log('🚀 ~ file: index.tsx:24 ~ status:', status);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        await dispatch(loginUser(data));
        navigate('/');
      } catch (error) {
        return error;
      }
    } else {
      if (data.password === data.confirmPassword) {
        const userData = {
          email: data.email,
          name: data.name,
          password: data.password,
          avatar: data.avatar,
        };
        try {
          await dispatch(registerUser(userData));
          navigate('/login');
        } catch (error) {
          toast.error(AppErrors.PasswordDoNotMatch);
          return error;
        }
      } else {
        toast.error(AppErrors.PasswordDoNotMatch);
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={s.form}>
        {location.pathname === '/login' ? (
          <Login navigate={navigate} register={register} errors={errors} />
        ) : location.pathname === '/register' ? (
          <Register register={register} errors={errors} navigate={navigate} />
        ) : null}
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
