import React from 'react';
import styled from 'styled-components';
import { certificationMenuType } from '@/interfaces';

interface IProps {
  clickCertificationTypeMenu: (type: certificationMenuType) => void;
}

const SDTCertificateContentsLayout = styled.div`
  width: 100%;
  height: 841px;
  background-color: #555555;
  padding: 36px;
  border-radius: 20px;
`;

const LeftNavSide = styled.nav`
  width: 217px;
  height: 100%;
  border-right: 1px solid #777777;
`;

const MenuValue = styled.div`
  font-size: 28px;
  color: #949494;
  font-weight: 600;
  margin-bottom: 36px;
  cursor: pointer;
`;

const CertificateContents: React.FC<IProps> = ({
  clickCertificationTypeMenu,
}) => {
  return (
    <SDTCertificateContentsLayout>
      <LeftNavSide>
        {MENU_LIST.map((menu) => (
          <MenuValue key={menu.value}>{menu.value}</MenuValue>
        ))}
      </LeftNavSide>
    </SDTCertificateContentsLayout>
  );
};

export default CertificateContents;

const MENU_LIST = [
  {
    value: '등록증',
  },
  {
    value: '주요인증',
  },
  {
    value: '특허증',
  },
  {
    value: '시험성적서',
  },
];
