import React from 'react';
import styled from 'styled-components';
import CertificateContents from './CertificateContents';
import { certificationMenuType } from '@/interfaces';

interface Iprops {
  clickCertificationTypeMenu: (type: certificationMenuType) => void;
}

const SDTCertificationLayout = styled.section``;

const Certification: React.FC<Iprops> = ({ clickCertificationTypeMenu }) => {
  return (
    <SDTCertificationLayout>
      <CertificateContents
        clickCertificationTypeMenu={clickCertificationTypeMenu}
      />
    </SDTCertificationLayout>
  );
};

export default Certification;
