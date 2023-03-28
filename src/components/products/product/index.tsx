import { FC } from 'react';
import { IProducts } from '../../../common/types/products';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addItem } from '../../../store/slice/cart';
import { addFavorite, removeFavorite } from '../../../store/slice/favorite';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import s from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';

interface ProductProps extends IProducts {}

export const Product: FC<ProductProps> = ({ id, images, title, price, description }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const likedProduct = useAppSelector((state) => state.favorite.favoriteData);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      description,
      images,
    };
    dispatch(addItem(item));
  };

  const onClickFavorite = () => {
    const item = {
      id,
      title,
      price,
      description,
      images,
    };
    dispatch(addFavorite(item));
  };

  const onClickRemoveFavorite = () => {
    dispatch(removeFavorite({ id }));
  };

  const isLiked = likedProduct.find((obj: IProducts) => obj.id === id) ? (
    <AiFillHeart className={s.productLike} onClick={onClickRemoveFavorite} />
  ) : (
    <AiOutlineHeart className={s.productLike} onClick={onClickFavorite} />
  );

  return (
    <div className={s.product}>
      <div className={s.productTop}>
        <img src={images[0]} alt={title} onClick={() => navigate(`/products/${id}`)} />
        {isLiked}
        <button className={s.productButton} onClick={onClickAdd}>
          +
        </button>
      </div>
      <div className={s.productBottom}>
        <h3>{title.slice(0, 21)}...</h3>
        <p className={s.productDescription}>{description.slice(0, 45)}...</p>
        <span>{price} $</span>
      </div>
    </div>
  );
};
