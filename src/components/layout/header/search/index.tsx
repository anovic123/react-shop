import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

import s from './style.module.scss';

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  return (
    <form className={s.searchForm}>
      <input className={s.searchInput} placeholder="Поиск" type="text" />
      <span className={s.searchIcon}>
        <BsSearch />
      </span>
    </form>
  );
};
