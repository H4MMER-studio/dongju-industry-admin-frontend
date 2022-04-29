import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CertificationItem from './CertificationItem';
import CertificationEditor from './CertificationEditor';
import {
  certificationMenuType,
  ICertificationForm,
  ICertification,
  ICertificationMenuType,
} from '@/interfaces';
import { useDispatch } from 'react-redux';
import { useGetStore } from '@/hooks';
import { certificationActions } from '@/store';

interface Iprops {
  certifications: ICertification[];
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

const ItemTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #555555;
  margin-bottom: 16px;
`;

const CertificationItemLayout = styled.div`
  display: flex;
  align-items: center;
`;

const Certification: React.FC<Iprops> = ({
  certifications,
  clickCertificationTypeMenu,
}) => {
  const [openEditor, setOpenEditor] = useState<ICertificationMenuType | null>(
    null
  );
  const dispatch = useDispatch();
  const { certificationList } = useGetStore.certification();

  useEffect(() => {
    dispatch(certificationActions.getCertificationList('core-certification'));
  }, []);

  const clickCreateCertification = (certificationForm: ICertificationForm) => {
    // const formData = new FormData();
    // console.log('왜 안눌림?');
    // formData.append('certification_title', '등록증 제목');

    certificationForm.certification_type = openEditor!;
    dispatch(certificationActions.createCertification(certificationForm));
  };

  return (
    <>
      <SDTCertificationLayout>
        <Title>인증서 추가</Title>

        {CERTIFICATION_TYPE_LIST.map((v) => {
          return (
            <ListLayout>
              <ItemTitle>{v.name}</ItemTitle>
              <CertificationItemLayout>
                {certificationList.data.map((certification, i) => {
                  return (
                    <CertificationItem
                      title={certification.certification_type}
                      images={certification.certification_images}
                      isLast={certificationList.data.length - 1 === i}
                      clickAddCertification={() =>
                        setOpenEditor(certification.certification_type)
                      }
                      key={certification._id}
                    />
                  );
                })}
              </CertificationItemLayout>
            </ListLayout>
          );
        })}

        <CertificationEditor
          isOpen={openEditor !== null}
          clickCreateCertification={clickCreateCertification}
          close={() => setOpenEditor(null)}
        />
      </SDTCertificationLayout>
    </>
  );
};

export default Certification;

const CERTIFICATION_TYPE_LIST = [
  {
    id: 'license',
    name: '등록증',
  },
  {
    id: 'core-certification',
    name: '주요 인증',
  },
];
