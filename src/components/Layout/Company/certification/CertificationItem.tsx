import React from 'react';
import styled from 'styled-components';
import { IconAdd } from '@svg';
import { ICertificationImage } from '@/interfaces';

interface IProps {
  title: string;
  images: ICertificationImage[];
  isLast: boolean;
  clickAddCertification: () => void;
}

const CertificationEditorLayout = styled.div`
  margin-right: 20px;
`;

const CertificationListLayout = styled.div`
  display: flex;
  align-items: center;
`;

const AddCertificationLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 240px;
  background-color: #e8e8e8;
  cursor: pointer;
  margin-left: 20px;
`;

const AddButtonLayout = styled.div``;

const AddInfoText = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #b7b7b7;
`;

const AddIconLayout = styled.div`
  width: 48px;
  height: 48px;
  background-color: #c8c8c8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CertificationImage = styled.img`
  width: 190px;
  height: 240px;
`;

const CertificationItem: React.VFC<IProps> = (props) => {
  return (
    <CertificationEditorLayout>
      <CertificationListLayout>
        {props.images?.map((image) => (
          <CertificationImage
            src={image.url}
            key={image.name}
            alt="인증서 사진"
          />
        ))}

        {props.isLast && (
          <AddCertificationLayout onClick={props.clickAddCertification}>
            <AddButtonLayout>
              <AddIconLayout>
                <IconAdd />
              </AddIconLayout>
              <AddInfoText>등록</AddInfoText>
            </AddButtonLayout>
          </AddCertificationLayout>
        )}
      </CertificationListLayout>
    </CertificationEditorLayout>
  );
};

export default CertificationItem;
