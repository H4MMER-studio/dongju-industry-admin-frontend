import React from 'react';
import styled from 'styled-components';
import Detail from './Detail';

const HistoryLayout = styled.main``;

const History: React.FC = () => {
  return (
    <HistoryLayout>
      <Detail />
    </HistoryLayout>
  );
};

export default History;
