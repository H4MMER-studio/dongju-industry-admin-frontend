import React from 'react';
import Router, { useRouter } from 'next/router';
import { Product } from '@/components';
import { ProductType } from '@/interfaces';

const ProductView: React.FC = () => {
  const router = useRouter();
  const { type } = router.query as { type: ProductType['type'] };

  return <Product.Container productType={type} />;
};

export default ProductView;
