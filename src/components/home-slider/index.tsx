import { FC } from 'react';
import Slider from 'react-slick';

import Shirts from '../../assets/images/home-slider/t-shirts.png';
import Shoes from '../../assets/images/home-slider/shoes.png';

import { useMediaQuery } from '../../hooks';

import s from './style.module.scss';

interface HomeSliderProps {}

export const HomeSlider: FC<HomeSliderProps> = ({}) => {
  const isTablet = useMediaQuery(768);

  const settings = {
    infinite: false,
  };

  return (
    <>
      {!isTablet && (
        <section className={s.slider}>
          <Slider {...settings}>
            <img className={s.sliderImage} src={Shirts} />
            <img className={s.sliderImage} src={Shoes} />
          </Slider>
        </section>
      )}
    </>
  );
};
