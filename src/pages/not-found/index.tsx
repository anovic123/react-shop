import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { SubmitButton } from '../../components/ui/submit-button';

import IMG from '../../assets/images/not-found/404.png';

import s from './style.module.scss';

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <section className={s.notFound}>
      <img src={IMG} height="400" width="400" alt="Not Found" />
      <SubmitButton onClick={() => navigate('/')}>Go back</SubmitButton>
    </section>
  );
};
