import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/widgets';
import { IconCloseWhite, IconAdd } from '@svg';
import InputForm from './InputForm';
import InputDate from './InputDate';

interface Iprops {
  isOpen: boolean;
  close: () => void;
}

const CertificationEditorLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 0px;
  top: -36px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #383838;
  margin-bottom: 24px;
`;

const UploadImageLayout = styled.div`
  position: relative;
  width: 100%;
  height: 271px;

  input[type='file'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Input = styled.input``;

const UploadLabel = styled.label`
  cursor: pointer;
`;

const UploadBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 271px;
  background-color: #e8e8e8;
`;

const PlusLayout = styled.div`
  div {
    color: #b7b7b7;
    font-size: 20px;
    margin-top: 8px;
  }
`;

const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #c8c8c8;
  margin: 0 auto;
`;

const InputLayout = styled.div`
  margin-top: 24px;
`;
const InputDateLayout = styled.div`
  margin-top: 24px;
`;

const CertificationEditor: React.FC<Iprops> = ({ isOpen, close }) => {
  return (
    <Layout.Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          width: 675,
          height: 731,
          borderRadius: '13px',
          overflow: 'visible',
        },
      }}
    >
      <CloseIcon onClick={close}>
        <IconCloseWhite />
      </CloseIcon>
      <CertificationEditorLayout>
        <Title>신규등록</Title>
        <UploadImageLayout>
          <UploadLabel htmlFor="upload-image">
            <UploadBox>
              <PlusLayout>
                <Plus>
                  <IconAdd />
                </Plus>
                <div>사진업로드</div>
              </PlusLayout>
            </UploadBox>
          </UploadLabel>
          <Input type="file" accept="image/*" id="upload-image" />
        </UploadImageLayout>
        <InputLayout>
          <InputForm title="인증명" />
        </InputLayout>
        <InputLayout>
          <InputForm title="시험기관" />
        </InputLayout>
        <InputDateLayout>
          <InputDate />
        </InputDateLayout>
      </CertificationEditorLayout>
    </Layout.Dialog>
  );
};

export default CertificationEditor;
