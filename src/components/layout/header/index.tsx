import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FcLike } from 'react-icons/fc';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Search } from './search';
import { User } from './user';

import { navMenu } from '../../../common/mocks/navigate';

import s from './style.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
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
      </div>
      <div className={s.headerBottom}>
        {navMenu.map((el) => (
          <Link to="#">
            <span>{el.icon}</span>
            {el.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
