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

const Certification: React.FC = () => {
  const [openEditor, setOpenEditor] = useState<ICertificationMenuType | null>(
    null
  );
  const dispatch = useDispatch();
  const { certificationList } = useGetStore.certification();

  useEffect(() => {
    dispatch(certificationActions.getCertificationList());
  }, []);

  const clickCreateCertification = (certificationForm: ICertificationForm) => {
    certificationForm.certification_type = openEditor!;
    dispatch(certificationActions.createCertification(certificationForm));
  };

  const sortCertificationList = (
    certificationList: ICertification[]
  ): ICertification[][] => {
    const licenseList: ICertification[] = [];
    const coreCertificationList: ICertification[] = [];
    const patentList: ICertification[] = [];
    const testResultList: ICertification[] = [];

    certificationList.forEach((certification) => {
      switch (certification.certification_type) {
        case 'license':
          licenseList.push(certification);
          break;
        case 'core-certification':
          coreCertificationList.push(certification);
          break;
        case 'patent':
          patentList.push(certification);
          break;
        case 'test-result':
          testResultList.push(certification);
          break;

        default:
          break;
      }
    });

    const result = [
      licenseList,
      coreCertificationList,
      patentList,
      testResultList,
    ];

    return result;
  };

  const setTitle = (type: ICertificationMenuType) => {
    switch (type) {
      case 'license':
        return '등록증';

      case 'core-certification':
        return '주요인증';

      case 'patent':
        return '특허증';

      case 'test-result':
        return '시험성적서';
    }
  };

  return (
    <SDTCertificationLayout>
      <Title>인증서 추가</Title>
      {sortCertificationList(certificationList.data).map(
        (sortedCertification, i) => {
          return (
            <ListLayout key={i}>
              <ItemTitle>
                {setTitle(sortedCertification[0]?.certification_type)}
              </ItemTitle>
              <CertificationItemLayout>
                {sortedCertification.map((certification, i) => {
                  return (
                    <CertificationItem
                      title={certification.certification_type}
                      images={certification.certification_images}
                      isLast={sortedCertification.length - 1 === i}
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
        }
      )}
      <CertificationEditor
        isOpen={openEditor !== null}
        clickCreateCertification={clickCreateCertification}
        close={() => setOpenEditor(null)}
      />
    </SDTCertificationLayout>
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
