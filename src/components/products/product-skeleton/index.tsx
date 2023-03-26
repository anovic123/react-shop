import { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface ProductSkeletonProps {}

export const ProductSkeleton: FC<ProductSkeletonProps> = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={308}
      height={337}
      viewBox="0 0 308 337"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="16" y="16" rx="7" ry="7" width="274" height="205" />
      <rect x="16" y="235" rx="7" ry="7" width="274" height="22" />
      <rect x="16" y="267" rx="7" ry="7" width="274" height="28" />
      <rect x="16" y="304" rx="7" ry="7" width="54" height="24" />
    </ContentLoader>
  );
};
