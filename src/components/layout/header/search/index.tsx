import { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';

import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { useAppDispatch, useAppSelector } from '../../../../hooks';

import { SearchList } from './search-list';

import { setSearchValue } from '../../../../store/slice/search';

import s from './style.module.scss';

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('');
  const searchResult = useAppSelector((state) => state.products.data);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <div className={s.search}>
      <form className={s.searchForm}>
        <input
          className={s.searchFormInput}
          placeholder="Поиск"
          type="text"
          value={value}
          onChange={onChange}
        />
        <span className={s.searchFormIcon}>
          <BsSearch />
        </span>
        {value && (
          <span className={s.searchFormIconClose} onClick={onClickClear}>
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
