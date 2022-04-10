import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import { IconDownArrowGray } from '@svg';

const STDContainer = styled.div`
  margin-right: 10%;

  h1 {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #383838;
  }

  @media (max-width: 1682px) {
    margin-right: 12%;
  }

  @media (max-width: 1023px) {
    margin-right: 0;
  }
`;

const STDAddContainer = styled.div`
  ${mixins.flexSet('flex-start')}
  padding: 24px;
  margin-bottom: 12px;
  background: #ffffff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 13px;
  overflow-x: auto;
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

const STDItemWrapper = styled.div<{ marginRight?: number }>`
  margin-right: ${({ marginRight }) => marginRight ?? 16}px;
`;

const STDSubTitle = styled.h4`
  margin-bottom: 4px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #383838;
`;

const STDInputBox = styled.input<{ width?: number }>`
  width: ${({ width }) => width ?? 100}px;
  height: 48px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: #383838;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fcfcfc;
`;

type selectBoxProps = {
  width?: number;
  isValueOn?: false;
};

const STDSelectBox = styled.div<selectBoxProps>`
  ${mixins.flexSet('space-between')}
  width: ${({ width }) => width ?? 100}px;
  height: 48px;
  padding: 0 16px;
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: ${({ isValueOn }) => (!isValueOn ? '#777777' : '#383838')};
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  background: #fcfcfc;
  cursor: pointer;

  svg {
    width: 12px;
  }
`;

const AddPerformance: React.FC = () => {
  return (
    <STDContainer>
      <h1>납품실적 추가</h1>
      <STDAddContainer>
        <STDItemWrapper>
          <STDSubTitle>납품처</STDSubTitle>
          <STDInputBox width={333} placeholder="납품처" />
        </STDItemWrapper>
        <STDItemWrapper>
          <STDSubTitle>품명 및 규격</STDSubTitle>
          <STDInputBox width={333} placeholder="품명 및 규격" />
        </STDItemWrapper>
        <STDItemWrapper>
          <STDSubTitle>수량</STDSubTitle>
          <STDInputBox width={100} placeholder="수량" />
        </STDItemWrapper>
        <STDItemWrapper>
          <STDSubTitle>날짜(연)</STDSubTitle>
          <STDSelectBox width={100}>
            {'날짜'}
            <IconDownArrowGray />
          </STDSelectBox>
        </STDItemWrapper>
        <STDItemWrapper>
          <STDSubTitle>날짜(월)</STDSubTitle>
          <STDSelectBox width={100}>
            {'날짜'}
            <IconDownArrowGray />
          </STDSelectBox>
        </STDItemWrapper>
        <STDItemWrapper>
          <STDSubTitle>비고</STDSubTitle>
          <STDInputBox width={146} placeholder="비고" />
        </STDItemWrapper>
      </STDAddContainer>
      <STDAddButton>
        <button>추가</button>
      </STDAddButton>
    </STDContainer>
  );
};

export default AddPerformance;
