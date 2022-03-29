import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/widgets';
import { ProductMenu } from '@/interfaces';

interface Iprops {
  productMenu: ProductMenu;
}

const MenuLayout = styled.div`
  min-height: 135px;
  width: 100%;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 12px;
  overflow: hidden;
`;

const TopLayout = styled.div`
  padding: 16px;
`;

const BreadCrumb = styled.div`
  color: #383838;
  margin-bottom: 4px;
`;

const ProductNameLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled.div`
  font-size: 30px;
  color: #383838;
  font-weight: 600;
`;

const MenuButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLayout = styled.div``;

const MenuButton = styled.button`
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 400;
`;

const Menu: React.FC<Iprops> = ({ productMenu }) => {
  return (
    <MenuLayout>
      <TopLayout>
        <BreadCrumb>홈/제품/댐퍼 코일</BreadCrumb>
        <ProductNameLayout>
          <ProductName>{productMenu.productName}</ProductName>
          <Button.Primary
            value="문의하기"
            state="active"
            onClick={() => {}}
            cssStyle={'width:72px; height:32px; font-size:16px; padding:0px'}
          />
        </ProductNameLayout>
      </TopLayout>
      <BottomLayout>
        <MenuButtonGroup>
          {productMenu.menuList.map((menu) => {
            return <MenuButton key={menu}>{menu}</MenuButton>;
          })}
        </MenuButtonGroup>
      </BottomLayout>
    </MenuLayout>
  );
};

export default Menu;
