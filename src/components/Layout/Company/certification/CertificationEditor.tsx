import React from 'react';
import styled from 'styled-components';
import { Layout } from '@/components/widgets';
import { IconCloseWhite } from '@svg';

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
      </CertificationEditorLayout>
    </Layout.Dialog>
  );
};

export default CertificationEditor;
