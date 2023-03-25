import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../hooks';

import { FcLike } from 'react-icons/fc';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import LOGO from '../../../assets/images/logo.svg';

import s from './style.module.scss';
import { Search } from './search';
import { User } from './user';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to="/">DEMO Shop</Link>
      </div>

      <Search />

      <div className={s.info}>
        <User />
        <Link to="/" className={s.favorites}>
          <FcLike />
        </Link>

        <Link to="/" className={s.cart}>
          <AiOutlineShoppingCart />
          <span className={s.cartCounter}>0</span>
        </Link>
      </div>
    </header>
  );
};
