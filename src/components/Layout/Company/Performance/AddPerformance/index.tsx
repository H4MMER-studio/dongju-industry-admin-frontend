import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';

const STDContainer = styled.div`
  h1 {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #383838;
  }
`;

const STDAddContainer = styled.div`
  ${mixins.flexSet()}
  padding: 24px;
  margin-bottom: 12px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 13px;
`;

const STDAddButton = styled.div`
  ${mixins.flexSet('flex-end')}
  margin-bottom: 48px;

  button {
    width: 90px;
    height: 48px;
    background: #2979ff;
    border-radius: 8px;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    color: white;
  }
`;

const AddPerformance: React.FC = () => {
  return (
    <STDContainer>
      <h1>납품실적 추가</h1>
      <STDAddContainer></STDAddContainer>
      <STDAddButton>
        <button>추가</button>
      </STDAddButton>
    </STDContainer>
  );
};

export default AddPerformance;
