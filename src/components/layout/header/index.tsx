import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FcLike } from 'react-icons/fc';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Search } from './search';
import { User } from './user';

import { navMenu } from '../../../common/mocks/navigate';

import s from './style.module.scss';
import { useAppSelector } from '../../../hooks';
import { ICartItem } from '../../../common/types/cart';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { cartData } = useAppSelector((state) => state.cart);

  const totalCount = cartData.reduce((sum: number, item: ICartItem) => sum + item.count, 0);

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

          <Link to="/cart" className={s.cart}>
            <AiOutlineShoppingCart />
            <span className={s.cartCounter}>{totalCount}</span>
          </Link>
        </div>
      </div>
      <div className={s.headerBottom}>
        {navMenu.map((el) => (
          <Link to="#" key={el.id}>
            <span>{el.icon}</span>
            {el.name}
          </Link>
        ))}
      </div>
    </header>
  );
};
