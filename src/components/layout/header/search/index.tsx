import { ChangeEvent, FC, useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { useAppSelector } from '../../../../hooks';

import { SearchList } from './search-list';

import s from './style.module.scss';

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  const [value, setValue] = useState('');
  const searchResult = useAppSelector((state) => state.products.data);

  return (
    <div className={s.search}>
      <form className={s.searchForm}>
        <input
          className={s.searchInput}
          placeholder="Поиск"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={s.searchIcon}>
          <BsSearch />
        </span>
        {value && (
          <span className={s.searchIconClose} onClick={() => setValue('')}>
            <GrClose />
          </span>
        )}
      </form>
      {value && (
        <SearchList
          result={searchResult}
          value={value}
          style={{ display: value ? 'block' : 'none' }}
        />
      )}
    </div>
  );
};
