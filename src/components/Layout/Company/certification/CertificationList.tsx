import React from 'react';
import styled from 'styled-components';
import { IconAdd } from '@svg';

interface IProps {
  title: string;
  images: [];
  clickAddCertification: () => void;
}

const CertificationEditorLayout = styled.div``;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #555555;
  margin-bottom: 16px;
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

const CertificationList: React.VFC<IProps> = (props) => {
  return (
    <CertificationEditorLayout>
      <Title>{props.title}</Title>
      <CertificationListLayout>
        {props.images.map((image) => (
          <div key={image}></div>
        ))}
        <AddCertificationLayout onClick={props.clickAddCertification}>
          <AddButtonLayout>
            <AddIconLayout>
              <IconAdd />
            </AddIconLayout>
            <AddInfoText>등록</AddInfoText>
          </AddButtonLayout>
        </AddCertificationLayout>
      </CertificationListLayout>
    </CertificationEditorLayout>
  );
};

export default CertificationList;
