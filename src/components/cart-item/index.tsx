import { FC } from 'react';

import { addItem, minusItem, removeItem } from '../../store/slice/cart';

import { ICartItem } from '../../common/types/cart';

import { useAppDispatch } from '../../hooks';

import s from './style.module.scss';
import { useNavigate } from 'react-router-dom';

interface CartItemProps extends ICartItem {}

export const CartItem: FC<CartItemProps> = ({ id, title, price, description, images, count }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove item?')) {
      dispatch(removeItem({ id }));
    }
  };

  return (
    <div className={s.cartItem}>
      <div className={s.cartItemImg}>
        <img src={images[0]} alt="Title" />
      </div>
      <div className={s.cartItemInfo}>
        <h3 className={s.cartItemTitle} onClick={() => navigate(`/products/${id}`)}>{title}</h3>
        <p>{description.slice(0, 20)}</p>
      </div>
      <div className={s.cartItemDetail}>
        <button className={s.cartButton} onClick={onClickPlus}>
          +
        </button>
        <b>{count}</b>
        <button disabled={count === 1} className={s.cartButton} onClick={onClickMinus}>
          -
        </button>
      </div>
      <div className={s.cartItemPrice}>
        <b>{price * count} $</b>
      </div>
      <button className={s.cartRemoveButton} onClick={onClickRemove}>
        Remove
      </button>
    </div>
  );
};
