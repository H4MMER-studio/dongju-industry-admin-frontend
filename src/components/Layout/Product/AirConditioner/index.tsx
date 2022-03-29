import { mixins } from '@/styles';
import React from 'react';
import styled from 'styled-components';
import AirConditionerInfoBox from './partials/AirConditionerInfoBox';
import DesignCondition1 from './partials/DesignCondition1';
import DesignCondition2 from './partials/DesignCondition2';

const STDContainer = styled.article`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 24px 0;
`;

const STDContentBox = styled.div<{ marginBottom?: number }>`
  width: 100%;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 36}px;

  > h2 {
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 700;
    color: #2979ff;
  }

  img {
    width: 100%;
  }
`;

const AirConditioner: React.FC = () => {
  const casingPanelContent = [
    {
      subTitle: '재질',
      description: (
        <>
          <p>Out Casing : SCP1 (냉간압연강판), In Casing : GI (아연도강판)</p>
          <ul>
            <li>보온재 : 불연재(Glass Wool 48K), 난연재(폴리에스터폼), 기타</li>
            <li>
              페인트 : Casing - 에폭시폴리에스테르 도료로 마감처리 후 180℃ 이상
              고온에서 열처리 (분체정전도장)
            </li>
            <li>열 손실을 최소화하고 흡음 효과를 높임</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '특징',
      description: '분해 조립이 용이하며, 특수 여건에 따른 변형제작이 가능함',
    },
    { subTitle: '종류', description: '내부절곡 Type, AL Pro File Type' },
  ];

  const supplyFanContent = [
    {
      subTitle: '재질',
      description: (
        <>
          <ul>
            <li>Casing : SCP1 (냉간압연강판)</li>
            <li>Shaft : S45C</li>
            <li>Bearing : 자동 조심형 로라 베아링</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '특징',
      description: (
        <>
          <ul>
            <li>KSB 0612 G2.5에 의해 진동을 교정하므로 저소음, 저진동 유지</li>
            <li>풍량 정압에 의한 선택의 폭이 큼</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '종류',
      description: (
        <>
          <ul>
            <li>Sirocco Fan (다익형)</li>
            <li>Backward Fan (익형)</li>
          </ul>
        </>
      ),
    },
  ];

  const heatingCoolingCoil = [
    {
      subTitle: '재질',
      description: (
        <>
          <ul>
            <li>동관 : Dcup 99.9% 인탈산</li>
            <li>Fin : Aluminum Fan (A1100-1)</li>
            <li>Header : Copper Type</li>
            <li>Coil Frame : 아연도 SPG 2.0TH</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '종류',
      description: (
        <>
          <ul>
            <li>수용코일 / 증기가열코일 / 냉매코일</li>
          </ul>
        </>
      ),
    },
  ];

  const airFilterContent = [
    {
      subTitle: '종류',
      description: (
        <>
          <ul>
            <li>PRE Filter : AFI 85%</li>
            <li>Medium : NBS 85%</li>
            <li>Header : Copper Type</li>
            <li>Hepa : DOP 99.9%</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '특징',
      description: (
        <>
          <ul>
            <li>분해 조립성이 뛰어남</li>
            <li>
              뛰어난 여과력으로 기류의 저항 및 열량의 저하를 최대한 방지함
            </li>
          </ul>
        </>
      ),
    },
  ];

  const damperContent = [
    {
      subTitle: '재질',
      description: (
        <>
          <ul>
            <li>Frame : 냉간압연강판 or AL 압출품</li>
            <li>Blade : Aluminum A-6063 1.6TH</li>
          </ul>
        </>
      ),
    },
    {
      subTitle: '종류',
      description: (
        <>
          <ul>
            <li>Air Tight Type</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <STDContainer>
      <AirConditionerInfoBox title={'Casing Panel'} list={casingPanelContent} />
      <AirConditionerInfoBox title={'Supply Fan'} list={supplyFanContent} />
      <AirConditionerInfoBox
        title={'Coil (Heating & Cooling)'}
        list={heatingCoolingCoil}
      />
      <AirConditionerInfoBox
        title={'Air Filter (Pre & Medium)'}
        list={airFilterContent}
      />
      <AirConditionerInfoBox title={'Damper'} list={damperContent} />
      <STDContentBox>
        <h2>선정방법</h2>
        <img src="/image/product/airConditioner/airconditioner_graph.png" />
      </STDContentBox>
      <STDContentBox>
        <h2>표준사항 설계조건</h2>
        <DesignCondition1 />
        <DesignCondition2 />
      </STDContentBox>
    </STDContainer>
  );
};

export default AirConditioner;
