import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICartItem } from '../../common/types/cart';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { CartItem } from '../../components/cart-item';

import { clearItems } from '../../store/slice/cart';

import s from './style.module.scss';

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const { cartData, totalPrice, count } = useAppSelector((state) => state.cart);

  const totalCount = cartData.reduce((sum: number, item: ICartItem) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Clear cart?')) {
      dispatch(clearItems());
    }
  };

  if (!cartData.length) {
    return (
      <div className={s.cartEmpty}>
        <h3>Sorry, your cart is empty.</h3>
        <Link to="/">To Main Page</Link>
      </div>
    );
  }

  return (
    <section className={s.cart}>
      <div className={s.cartTop}>
        <h2 className={s.cartTopTitle}>Cart</h2>
        <button className={s.cartTopClear} onClick={onClickClear}>
          Clear
        </button>
      </div>
      <div className={s.cartItems}>
        {cartData.map((elem: ICartItem) => (
          <CartItem key={elem.id} {...elem} />
        ))}
      </div>
      <div className={s.cartBottom}>
        <div className={s.cartBottomDetails}>
          <span>
            All: <b>{totalCount}</b>
          </span>
          <span>
            Sum: <b>{totalPrice} $</b>
          </span>
        </div>
        {/* <div className={s.cartBottomButtons}>
          <Link to="/" className={s.cartButton}>
            Go Back
          </Link>
        </div> */}
      </div>
    </section>
  );
};
