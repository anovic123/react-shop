import { ChangeEvent, FC, useEffect, useState } from 'react';
import { FormGroup } from '../../components/ui/form-group';
import { SubmitButton } from '../../components/ui/submit-button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateUserInfo } from '../../store/thunks/auth';
import s from './style.module.scss';

interface SettingsPageProps {}

export const SettingsPage: FC<SettingsPageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    avatar: '',
  });

  useEffect(() => {
    if (!user) return;

    setData(user);
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNotEmpty = Object.values(data).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(updateUserInfo(data));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <FormGroup name="email" type="email" value={data.email} onChange={handleChange} />
      <FormGroup name="name" type="text" value={data.name} onChange={handleChange} />
      <FormGroup name="password" type="password" value={data.password} onChange={handleChange} />
      <FormGroup name="avatar" type="text" value={data.avatar} onChange={handleChange} />
      <SubmitButton type="submit">Обновить данные</SubmitButton>
    </form>
  );
};
