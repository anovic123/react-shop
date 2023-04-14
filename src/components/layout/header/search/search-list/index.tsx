import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IProducts } from '../../../../../common/types/products';

import s from '../style.module.scss';

interface SearchListProps {}

export const SearchList: FC<any> = ({ result, value }) => {
  return (
    <div className={s.searchList}>
      {result
        .filter((el: IProducts) => el.title.toLowerCase().includes(value.toLowerCase()))
        .map((elem: IProducts) => (
          <div className={s.resultItem} key={elem.id}>
            <img src={elem?.images[0]} alt={elem.title} />
            <div className={s.resultItemBody}>
              <Link className={s.resultItemTitle} to={`products/${elem.id}`}>
                {elem.title}
              </Link>
              <p className={s.resultItemDescription}>{elem.description.slice(0, 50)}...</p>
              <span className={s.resultItemPrice}>{elem.price} $</span>
            </div>
          </div>
        ))}
    </div>
  );
};
