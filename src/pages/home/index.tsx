import { FC, useEffect } from 'react';
import { Products } from '../../components/products';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProductsData } from '../../store/thunks/products';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.data);
  // console.log('🚀 ~ file: index.tsx:12 ~ products:', products);

  useEffect(() => {
    dispatch(getProductsData());
  }, []);

  const filteredData = (item: string) => {
    const filtered = products.filter((product: any) => product.category.name === item);

    return filtered;
  };

  return (
    <>
      <Products title="Electronics" data={filteredData('Electronics')} />
      <Products title="Clothes" data={filteredData('Clothes')} />
      <Products title="Shoes" data={filteredData('Shoes')} />
    </>
  );
};
