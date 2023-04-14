import { FC, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';

import { Products } from '../../components/products';
import { SubmitButton } from '../../components/ui/submit-button';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { addItem } from '../../store/slice/cart';
// import { addFavorite } from '../../store/slice/favorite';

import { getSingleProductData } from '../../store/thunks/products';

import s from './style.module.scss';

interface SingleProductPageProps {}

export const SingleProductPage: FC<SingleProductPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  
  const { id } = useParams();
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const { singleData, isLoading } = useAppSelector((state) => state.products);
  const products = useAppSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getSingleProductData(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!singleData) {
    return <div>Error</div>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setActiveSlide(index),
  };

  const navSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { title, price, description, images } = singleData;

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

  return (
    <section className={s.single}>
      <div className={s.singleWrapper}>
        <div className={s.singleSlider}>
          <Slider {...settings} ref={sliderRef}>
            {singleData?.images?.map((el) => (
              <div className={s.singleSliderImg} key={el}>
                <img src={el} alt="#" />
              </div>
            ))}
          </Slider>

          <Slider {...navSettings} className={s.sliderNav}>
            {singleData?.images?.map((el, index) => (
              <div
                key={el}
                className={index === activeSlide ? s.active : s.sliderItem} // Добавляем класс "active" к активному элементу
                onClick={() => sliderRef.current?.slickGoTo(index)} // Переходим к соответствующему слайду по клику
              >
                <img src={el} alt="#" />
              </div>
            ))}
          </Slider>
        </div>
        <div className={s.singleDescription}>
          <h3 className={s.singleTitle}>{singleData.title}</h3>
          <div className={s.singleCol}>
            <span className={s.singleColTitle}>Category:</span>{' '}
            <span className={s.singleColDesc}>{singleData.category?.name}</span>
          </div>
          <p className={s.singleP}>{singleData.description}</p>
          <span className={s.singlePrice}>{singleData.price} $</span>
          <div className={s.singleButtons}>
            <SubmitButton onClick={onClickAdd}>Add to cart</SubmitButton>
          </div>
        </div>
      </div>
      <Products title="Related Content" data={products} />
    </section>
  );
};
