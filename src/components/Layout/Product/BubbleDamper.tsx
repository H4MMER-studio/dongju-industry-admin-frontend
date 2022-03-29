import React from 'react';
import styled from 'styled-components';
import * as ProductComponents from './components';

const BubbleDamperLayout = styled.section`
  margin-top: 24px;
`;

const OverviewCardLayout = styled.section`
  margin-bottom: 36px;
`;

const BubbleDamper: React.FC = () => {
  return (
    <BubbleDamperLayout>
      <OverviewCardLayout>
        <ProductComponents.OverviewCard
          overview={
            'BSL3(생물안전3등급) 실험실 및 격리 병실의 급·배기 시설의 덕트상에 설치하여 내부의 세균이나 바이러스가 유출되지 않도록 완전 차단하는 댐퍼입니다. (1,000pa 압력에서 0%의 누기율)'
          }
        />
      </OverviewCardLayout>
      <ProductComponents.ApplyInfoCard
        applyList={[
          '에비슨의생명연구센터(ABMRC)',
          '각 BSL3연구실',
          '삼성서울병원 응급실 및 격리병실',
          '국립중앙 의료원(메르스 병원균 격리병실',
        ]}
      />
    </BubbleDamperLayout>
  );
};

export default BubbleDamper;
