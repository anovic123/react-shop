import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FcLike } from 'react-icons/fc';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Search } from './search';
import { User } from './user';

import { useAppSelector } from '../../../hooks';

// import { navMenu } from '../../../common/mocks/navigate';
import { ICartItem } from '../../../common/types/cart';

import s from './style.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { cartData } = useAppSelector((state) => state.cart);
  const { favoriteData } = useAppSelector((state) => state.favorite);

  const totalCount = cartData.reduce((sum: number, item: ICartItem) => sum + item.count, 0);

  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div className={s.headerTopLogo}>
          <Link to="/">DEMO Shop</Link>
        </div>

        <Search />

        <div className={s.info}>
          <User />
          <Link to="/favorite" className={s.infoItem}>
            <FcLike />
            <span className={s.infoItemCounter}>{favoriteData.length}</span>
          </Link>

          <Link to="/cart" className={s.infoItem}>
            <AiOutlineShoppingCart />
            <span className={s.infoItemCounter}>{totalCount}</span>
          </Link>
        </div>
      </div>
      {/* <div className={s.headerBottom}>
        {navMenu.map((el) => (
          <Link to="#" key={el.id}>
            <span>{el.icon}</span>
            {el.name}
          </Link>
        ))}
      </div> */}
    </header>
  );
};
