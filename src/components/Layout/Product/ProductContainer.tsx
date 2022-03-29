import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductType, ProductMenu } from '@/interfaces';
import * as ProductComponents from './components';
import { Product } from '@/components';
import { mixins } from '@/styles';

interface Iprops {
  productType: ProductType['type'];
}

const ProductContainerLayout = styled.div`
  ${mixins.flexSet('space-between', 'unset')}
  width: 100%;
  min-width: 0;
  height: 100%;
  padding-right: 8px;

  @media (max-width: 1365px) {
    display: block;
    overflow: scroll;
  }

  @media (max-width: 1024px) {
    padding: 0 16px 0;
  }
`;

const ProductManualLayout = styled.div`
  padding: 24px 24px 0 0;

  @media (max-width: 1365px) {
    padding-right: 0px;
    margin-bottom: 48px;
  }
`;

const TableLocation = styled.section`
  width: 100%;
  min-width: 0;
  margin-right: 16px;
`;

const ProductContainer: React.FC<Iprops> = ({ productType }) => {
  const [selectedProductManual, setSelectedProductManual] = useState(
    PRODUCT_MANUAL_DATA['air-conditioner']
  );

  useEffect(() => {
    setSelectedProductManual(PRODUCT_MANUAL_DATA[productType]);
  }, [productType]);

  const renderProduct = (type: ProductType['type']) => {
    switch (type) {
      case 'air-conditioner':
        return <Product.AirConditioner />;
      case 'freeze-protection-damper-coil':
        return <Product.DamperCoilDetail />;
      case 'exhaust-unit':
        return <Product.ExhaustUnit />;
      case 'bubble-damper':
        return <Product.BubbleDamper />;
      case 'fully-sealed-door':
        return <Product.FullySealedDoor />;
    }
  };

  return (
    <ProductContainerLayout>
      <ProductManualLayout>
        <ProductComponents.ProductManual productMenu={selectedProductManual} />
      </ProductManualLayout>
      <TableLocation>{renderProduct(productType)}</TableLocation>
    </ProductContainerLayout>
  );
};

export default ProductContainer;

const PRODUCT_MANUAL_DATA: {
  [key: string]: ProductMenu;
} = {
  'air-conditioner': {
    productName: '공기조화기',
    menuList: ['구조', '선정방법', '규격표'],
    detailImages: [
      '/image/product/air-conditioner/prod2_img1.jpg',
      '/image/product/air-conditioner/prod2_img2.jpg',
      '/image/product/air-conditioner/prod2_img3.jpg',
      '/image/product/air-conditioner/prod2_img4.jpg',
    ],
  },
  'freeze-protection-damper-coil': {
    productName: '동파방지댐퍼코일',
    menuList: ['개요', '구조', '작동원리', '주의사항'],
    detailImages: [
      '/image/product/freeze-protection-damper-coil/prod1_img1.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img2.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img3.jpg',
      '/image/product/freeze-protection-damper-coil/prod1_img4.jpg',
    ],
  },

  'exhaust-unit': {
    productName: '배기유니트',
    menuList: ['개요', '적용'],
    detailImages: [
      '/image/product/exhaust-unit/prod3_img1.jpg',
      '/image/product/exhaust-unit/prod3_img2.jpg',
      '/image/product/exhaust-unit/prod3_img3.jpg',
      '/image/product/exhaust-unit/prod3_img4.jpg',
    ],
  },
  'bubble-damper': {
    productName: '버블댐퍼',
    menuList: ['개요', '적용'],
    detailImages: [
      '/image/product/bubble-damper/prod4_img1.jpg',
      '/image/product/bubble-damper/prod4_img2.jpg',
      '/image/product/bubble-damper/prod4_img3.jpg',
      '/image/product/bubble-damper/prod4_img4.jpg',
      '/image/product/bubble-damper/prod4_img5.jpg',
      '/image/product/bubble-damper/prod4_img6.jpg',
      '/image/product/bubble-damper/prod4_img7.jpg',
    ],
  },
  'fully-sealed-door': {
    productName: '완전밀폐도어',
    menuList: ['개요', '적용'],
    detailImages: [
      '/image/product/fully-sealed-door/prod5_img1.jpg',
      '/image/product/fully-sealed-door/prod5_img2.jpg',
      '/image/product/fully-sealed-door/prod5_img3.jpg',
      '/image/product/fully-sealed-door/prod5_img4.jpg',
      '/image/product/fully-sealed-door/prod5_img5.jpg',
    ],
  },
  'air-blower': {
    productName: '송풍기',
    menuList: ['개요', '적용'],
    detailImages: [
      '/image/product/air-blower/prod6_img1.jpg',
      '/image/product/air-blower/prod6_img2.jpg',
      '/image/product/air-blower/prod6_img3.jpg',
    ],
  },
};
