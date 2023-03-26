import { FC } from 'react';
import Slider from 'react-slick';
import { IProducts } from '../../common/types/products';
import { useAppSelector } from '../../hooks';
import { Product } from './product';
import { ProductSkeleton } from './product-skeleton';

import s from './style.module.scss';

interface ProductsProps {
  title: string;
  data: IProducts[];
}

export const Products: FC<ProductsProps> = ({ title, data }) => {
  const isLoading = useAppSelector((state) => state.products.isLoading);

  const skeleton = [...new Array(6)].map((_, index) => <ProductSkeleton key={index} />);

  const settings = {
    speed: 500,
    slidesToShow: 4,
  };
  return (
    <section className={s.wrapper}>
      <h2 className={s.title}>{title}</h2>
      <Slider {...settings}>
        {isLoading ? skeleton : data.map((elem) => <Product key={elem.id} {...elem} />)}
      </Slider>
    </section>
  );
};
