import React from 'react';
import styled from 'styled-components';
import * as ProductComponents from './components';

const ExhaustUnitLayout = styled.section`
  width: 100%;
  padding: 24px 0;
`;

const OverviewCardLayout = styled.div`
  margin-bottom: 36px;
`;

const ExhaustUnit: React.FC = () => {
  return (
    <ExhaustUnitLayout>
      <OverviewCardLayout>
        <ProductComponents.OverviewCard overview="배기유니트란 실내공기의 압력을 외부보다 낮게(-3~-5pa) 유지시켜 병실이나 실험실 내부의 세균이나 바이러스 등이 외부로 유출되지 않도록 하는 읍압 장비입니다." />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        applyList={[
          '전국 축산연구소 BSL3실험실',
          '전국 보건환경 연구원 BSL3실험실',
          '동물실험실',
          '연구소 및 대학교의 BSL3실험실',
          '삼성서울병원 응급실 및 격리병실',
          '국립중앙 의료원(메르스 병원균 격리병실)',
        ]}
      />
    </ExhaustUnitLayout>
  );
};

export default ExhaustUnit;
