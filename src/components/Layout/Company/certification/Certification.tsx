import React, { useState } from 'react';
import styled from 'styled-components';
import CertificationList from './CertificationList';
import CertificationEditor from './CertificationEditor';
import { certificationMenuType } from '@/interfaces';

interface Iprops {
  certifications: { id: string; title: string; images: [] }[];
  clickCertificationTypeMenu: (type: certificationMenuType) => void;
}

const SDTCertificationLayout = styled.section``;

const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: #383838;
  margin-bottom: 24px;
`;

const ListLayout = styled.div`
  margin-bottom: 36px;
`;

const Certification: React.FC<Iprops> = ({
  certifications,
  clickCertificationTypeMenu,
}) => {
  const [openEditor, setOpenEditor] = useState(false);

  return (
    <>
      <SDTCertificationLayout>
        <Title>인증서 추가</Title>

        {[1, 2].map((v) => {
          return (
            <ListLayout>
              {certifications.map((certification) => {
                return (
                  <CertificationList
                    title={certification.title}
                    images={certification.images}
                    clickAddCertification={() => setOpenEditor(true)}
                    key={certification.id}
                  />
                );
              })}
              <CertificationEditor
                isOpen={openEditor}
                close={() => setOpenEditor(false)}
              />
            </ListLayout>
          );
        })}
      </SDTCertificationLayout>
    </>
  );
};

export default Certification;
