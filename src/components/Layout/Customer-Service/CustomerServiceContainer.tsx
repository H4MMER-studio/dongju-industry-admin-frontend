import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as CustomerServiceComponents from './Components';
import { Images } from 'public/image';
import useResize from '@/hooks/useResize';

interface Iprops {
  questionType: 'estimate' | 'A/S' | 'ETC';
  clickContact: (type: 'estimate' | 'A/S' | 'ETC') => void;
  closeForm: () => void;
}

const CustomerServiceContainerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ServiceLayout = styled.div`
  margin-right: 16px;

  @media (max-width: 1633px) {
    &:nth-child(2n) {
      margin-right: 0px;
    }

    &:nth-child(-1n + 2) {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 1024px) {
    margin: 0px;
  }
`;

const Layouts = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1633px) {
    width: 556px;
    flex-wrap: wrap;
  }

  @media (max-width: 1023px) {
    display: block;
    width: 100%;
    padding: 33px 16px;
    height: calc(100vh - 64px);
  }
`;

const CustomerServiceContainer: React.FC<Iprops> = ({
  questionType,
  clickContact,
  closeForm,
}) => {
  const { width } = useResize();

  return (
    <CustomerServiceContainerLayout>
      <Layouts>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="견적 문의"
            infoMessage="제품의 설치의 초기 견적 문의"
            backgroundImageSrc={Images.EsitmateBackground}
            clickContact={() => clickContact('estimate')}
          />
        </ServiceLayout>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="A/S 문의"
            infoMessage="설치 후 고장 및 수리 관련 문의"
            backgroundImageSrc={Images.ASBackground}
            clickContact={() => clickContact('A/S')}
          />
        </ServiceLayout>
        <ServiceLayout>
          <CustomerServiceComponents.Service
            title="그 외 문의"
            infoMessage="기타 사항 문의"
            backgroundImageSrc={Images.ETCBackground}
            clickContact={() => clickContact('ETC')}
          />
        </ServiceLayout>
        {width > 1023 && (
          <CustomerServiceComponents.InfoCard
            backgroundImageSrc={Images.InfoBackground}
          />
        )}
      </Layouts>
      {questionType && (
        <CustomerServiceComponents.FormModal
          questionType={questionType}
          closeForm={closeForm}
        />
      )}
    </CustomerServiceContainerLayout>
  );
};

export default CustomerServiceContainer;
