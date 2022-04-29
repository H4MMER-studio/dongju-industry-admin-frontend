import React from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import { IconDownArrowGray } from '@svg';
import { AddInfo } from '../History';

interface IProps {
  addInfo: AddInfo;
  addInfoHandler(type: keyof AddInfo, value: string | number): void;
  onClickAddButton(): void;
}

const STDContainer = styled.article`
  h1 {
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: #383838;
  }
`;

const STDAddContainer = styled.div`
  ${mixins.flexSet('flex-start', 'flex-start')}
  padding: 36px 20px;
  margin-bottom: 12px;
  background: #ffffff;
  border: 1px dashed #b7b7b7;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 20px;

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

const STDRightContentWrapper = styled.div`
  flex: 1;
`;

const STDSelectYearBox = styled.div`
  position: relative;
  min-width: 100px;
  margin-right: 32px;

  .selectStyle {
    width: 100%;
    padding: 12px 16px;
    background: #f5f5f5;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
  }

  .svgStyle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    pointer-events: none;
  }
`;

const STDMonthWrapper = styled.div`
  ${mixins.flexSet('flex-start')}
  margin-bottom: 20px;
`;

const STDMonthButton = styled.button<{ isSelected?: boolean }>`
  ${mixins.flexSet()}
  min-width: 55px;
  padding: 0 8px;
  margin-right: 20px;
  font-weight: 600;
  font-size: 19px;
  line-height: 32px;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#777777')};
  background: ${({ isSelected }) => (isSelected ? '#2979FF' : '#efefef')};
  border-radius: 12px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const STDTextInput = styled.input`
  width: 100%;
  height: 52px;
  padding: 0 16px;
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  border-radius: 12px;
  font-weight: 400;
  font-size: 19px;
  line-height: 36px;
  color: #383838;
`;

const AddHistory: React.FC<IProps> = ({
  addInfo,
  addInfoHandler,
  onClickAddButton,
}) => {
  const currentYear = new Date().getFullYear();
  const latestYear = Array(40)
    .fill(0)
    .map((_, index) => currentYear - index);
  const monthList = Array(12)
    .fill(0)
    .map((_, index) => index + 1);

  return (
    <STDContainer>
      <h1>연혁 추가</h1>
      <STDAddContainer>
        <STDSelectYearBox>
          <select
            className="selectStyle"
            placeholder="연도"
            value={addInfo.selectedyear}
            onChange={(e) => addInfoHandler('selectedyear', e.target.value)}
          >
            {latestYear.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
          <IconDownArrowGray className="svgStyle" />
        </STDSelectYearBox>
        <STDRightContentWrapper>
          <STDMonthWrapper>
            {monthList.map((month) => (
              <STDMonthButton
                key={month}
                isSelected={addInfo.selectedMonth === month}
                onClick={() => addInfoHandler('selectedMonth', month)}
              >
                {month}월
              </STDMonthButton>
            ))}
          </STDMonthWrapper>
          <STDTextInput
            placeholder="내용을 입력해주세요."
            value={addInfo.content}
            onChange={(e) => addInfoHandler('content', e.target.value)}
          />
        </STDRightContentWrapper>
      </STDAddContainer>
      <STDAddButton>
        <button onClick={onClickAddButton}>추가</button>
      </STDAddButton>
    </STDContainer>
  );
};

export default AddHistory;
