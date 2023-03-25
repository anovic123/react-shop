import { FC } from 'react';
import { IProducts } from '../../../common/types/products';

import s from './style.module.scss';

interface ProductProps extends IProducts {}

export const Product: FC<ProductProps> = ({ images, title, price, description }) => {
  return (
    <div className={s.product}>
      <div className={s.productTop}>
        <img src={images[0]} alt={title} />
        <button className={s.productButton}>+</button>
      </div>
      <div className={s.productBottom}>
        <h3>{title.slice(0, 21)}...</h3>
        <p className={s.productDescription}>{description.slice(0, 45)}...</p>
        <span>{price} $</span>
      </div>
    </div>
  );
};
