import React from 'react';
import styled from 'styled-components';
import * as ProductComponents from './components';

const FullySealedDoorLayout = styled.div`
  padding: 24px 0;
`;

const OverviewCardLayout = styled.div`
  margin-bottom: 36px;
`;

const FullySealedDoor: React.FC = () => {
  return (
    <FullySealedDoorLayout>
      <OverviewCardLayout>
        <ProductComponents.OverviewCard overview="완전밀폐도어는 열교환될 수 있는 가능성을 대폭 줄여줌으로써 열량 손실과 결로 발생을 최소화하여 줍니다." />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        applyList={[
          '삼성전자(베트남) 외조기,공조기',
          '삼성전자(탕정) 외조기,공조기',
        ]}
      />
    </FullySealedDoorLayout>
  );
};

export default FullySealedDoor;
