import React, { useState } from 'react';
import styled from 'styled-components';
import { mixins } from '@/styles';
import { IconDownArrowGray } from '@svg';

type PatchInfo = {
  history_id: string | number;
  history_month: string | number;
  history_year: string | number;
  history_content: string | number;
};

interface IProps {
  patchInfo: PatchInfo;
  patchInfoHandler(type: keyof PatchInfo, value: string | number): void;
  onClickDeleteHistory(id: string | number): void;
}

const STDContainer = styled.div`
  padding-top: 14px;
  margin-bottom: 34px;
`;

const STDAddContainer = styled.div`
  ${mixins.flexSet('flex-start', 'flex-start')}
  margin-bottom: 12px;
  background: #ffffff;

  overflow-x: auto;
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

const STDDeleteButton = styled.div`
  margin-top: 12px;
  text-align: right;

  > button {
    padding: 12px 16px;
    font-weight: 600;
    font-size: 17px;
    line-height: 24px;
    color: #ff334b;
  }
`;

const PatchHistoryItem: React.FC<IProps> = ({
  patchInfo,
  patchInfoHandler,
  onClickDeleteHistory,
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
      <STDAddContainer>
        <STDSelectYearBox>
          <select
            className="selectStyle"
            value={patchInfo.history_year}
            onChange={(e) => patchInfoHandler('history_year', e.target.value)}
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
                isSelected={patchInfo.history_month === month}
                onClick={() => patchInfoHandler('history_month', month)}
              >
                {month}월
              </STDMonthButton>
            ))}
          </STDMonthWrapper>
          <STDTextInput
            placeholder="내용을 입력해주세요."
            value={patchInfo.history_content}
            onChange={(e) =>
              patchInfoHandler('history_content', e.target.value)
            }
          />
        </STDRightContentWrapper>
      </STDAddContainer>
      <STDDeleteButton>
        <button
          onClick={() => {
            if (window.confirm('정말로 삭제하시겠습니까?')) {
              onClickDeleteHistory(patchInfo.history_id);
            } else {
              alert('삭제 취소');
            }
          }}
        >
          삭제
        </button>
      </STDDeleteButton>
    </STDContainer>
  );
};

export default PatchHistoryItem;
