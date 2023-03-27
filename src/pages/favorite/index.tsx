import { FC } from 'react';
import { IProducts } from '../../common/types/products';
import { Product } from '../../components/products/product';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearFavoriteList } from '../../store/slice/favorite';

import s from './style.module.scss';

interface FavoritePageProps {}

export const FavoritePage: FC<FavoritePageProps> = ({}) => {
  const { favoriteData } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  const handleClearList = () => {
    if (window.confirm('Are you sure you want to clear?')) {
      dispatch(clearFavoriteList());
    }
  };

  return (
    <section>
      {!favoriteData.length ? (
        <h3 className={s.title}>Your favorite list is empty :(</h3>
      ) : (
        <>
          <div className={s.wrapper}>
            {favoriteData.map((elem: IProducts) => (
              <Product key={elem.id} {...elem} />
            ))}
          </div>
          <button className={s.clearButton} onClick={handleClearList}>
            Remove All
          </button>
        </>
      )}
    </section>
  );
};
