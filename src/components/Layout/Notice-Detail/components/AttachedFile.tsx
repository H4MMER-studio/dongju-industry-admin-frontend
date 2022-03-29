import React from 'react';
import styled from 'styled-components';
import { Icon } from 'public/image';

const AttachedFile: React.FC = () => {
  return (
    <AttachedFileLayout>
      <FileName>첨부파일 명</FileName>
      <Icon.DownloadIcon />
    </AttachedFileLayout>
  );
};

export default AttachedFile;

const AttachedFileLayout = styled.div`
  width: 100%;
  min-height: 48px;
  background-color: #383838;
  font-size: 12px;
  border-radius: 12px;
  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileName = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #c8c8c8;
`;
