import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useGetStore } from '@/hooks';
import { IHistory, IPatchHistoriesParams } from '@/interfaces';
import { mixins } from '@/styles';
import { IconPen } from '@svg';
import PatchHistoryItem from './PatchHistoryItem';
import { historyActions } from '@/store';

type PatchInfo = {
  history_id: string | number;
  history_month: string | number;
  history_year: string | number;
  history_content: string | number;
};

interface IProps {
  onClickDeleteButton(id: number | string): void;
  onClickPatchButton(patchInfo: IPatchHistoriesParams['data']): void;
}

const STDDetailLayout = styled.div`
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #c8c8c8;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1023px) {
    padding: 0 16px 30px;
  }
`;

const YearRange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 40px;
  background-color: #2979ff;
  color: #fff;
  border-radius: 20px;
  font-size: 20px;
  margin-bottom: 24px;
`;

const YearHistoryLayout = styled.div<{ isRevising?: boolean }>`
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 4px 12px 4px rgba(56, 56, 56, 0.08);
  border-radius: 20px;
  padding: 16px 20px;
  margin-bottom: 12px;

  ${({ isRevising }) => !isRevising && `display: flex;`}

  &:last-child {
    margin-bottom: 0;
  }
`;

const STDReviseButton = styled.button`
  ${mixins.flexSet()}
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  padding: 15px;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #2979ff;

  > svg {
    width: 18px;
    height: 18px;
    margin-right: 11px;
    object-fit: contain;
  }
`;

const LeftSection = styled.div`
  .year {
    height: 36px;
    font-weight: bold;
    font-size: 30px;
    color: #448aff;
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      font-size: 24px;
    }
  }
`;

const RightSection = styled.div`
  margin-left: 32px;
`;

const MonthHistoryLayout = styled.div`
  margin-bottom: 20px;

  .month {
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 19px;
    color: #383838;
    margin-bottom: 4px;

    @media (max-width: 1023px) {
      font-size: 17px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailContents = styled.div`
  font-size: 19px;
  margin-bottom: 12px;
  color: #555555;

  @media (max-width: 1023px) {
    font-size: 17px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const STDBottomButtonWrapper = styled.div`
  ${mixins.flexSet()}
`;

const STDSaveButton = styled.button`
  padding: 12px 20px;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #ffffff;
  background: #2979ff;
  border-radius: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

const STDCancelButton = styled.button`
  padding: 12px 20px;
  margin-right: 16px;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: gray;
  background: #f0f0f0;
  border-radius: 8px;

  &:hover {
    opacity: 0.7;
  }
`;

const Detail: React.FC<IProps> = ({
  onClickDeleteButton,
  onClickPatchButton,
}) => {
  const [mouseOnAt, setMouseOnAt] = useState<string | number>('');
  const [selectedReviseYear, setSelectedReviseYear] = useState<string | number>(
    ''
  );
  const initialPatchInfo = {
    history_id: '',
    history_month: '',
    history_year: '',
    history_content: '',
  };
  const [patchInfo, setPatchInfo] = useState<PatchInfo[]>([initialPatchInfo]);
  const { historyList } = useGetStore.history();

  const patchInfoHandler = (
    index: number,
    id: keyof PatchInfo,
    value: string | number
  ) => {
    setPatchInfo((data) => {
      const newData = [...data];
      newData[index][id] = value;
      return newData;
    });
  };

  const onClickCancelButton = () => {
    setSelectedReviseYear('');
    setPatchInfo([initialPatchInfo]);
  };

  return (
    <>
      {historyList.map(({ start_year, value }) => {
        const newValue = {} as {
          [key: string]: (Omit<IHistory, 'history_content'> & {
            history_content: string[];
          })[];
        };
        const yearObjValue = {} as { [key: string]: IHistory[] };
        value.forEach((v) => {
          if ((newValue[v.history_year]?.length ?? 0) > 0) {
            let isExist = false;
            newValue[v.history_year] = newValue[v.history_year].map((v2) => {
              if (v2.history_month === v.history_month) {
                isExist = true;

                return {
                  ...v2,
                  history_content: [...v2.history_content, v.history_content],
                };
              } else {
                return {
                  ...v2,
                };
              }
            });
            if (!isExist) {
              newValue[v.history_year].push({
                ...v,
                history_content: [v.history_content],
              });
            }
          } else {
            newValue[v.history_year] = [
              { ...v, history_content: [v.history_content] },
            ];
          }
          if ((yearObjValue[v.history_year]?.length ?? 0) > 0) {
            yearObjValue[v.history_year].push({ ...v });
          } else {
            yearObjValue[v.history_year] = [{ ...v }];
          }
        });

        return (
          <STDDetailLayout key={start_year}>
            <YearRange>
              {start_year}~{Number(start_year) + 9}
            </YearRange>
            {Object.keys(newValue)
              .reverse()
              .map((year) => {
                return (
                  <YearHistoryLayout
                    key={year}
                    isRevising={selectedReviseYear === year}
                    onMouseEnter={() => setMouseOnAt(year)}
                    onMouseLeave={() => setMouseOnAt('')}
                  >
                    {selectedReviseYear === year ? (
                      <>
                        {yearObjValue[year]?.map((_, index) => (
                          <PatchHistoryItem
                            patchInfo={patchInfo[index]}
                            patchInfoHandler={(id, value) =>
                              patchInfoHandler(index, id, value)
                            }
                            onClickDeleteHistory={(id) => {
                              onClickDeleteButton(id);
                              setSelectedReviseYear('');
                            }}
                          />
                        ))}
                        <STDBottomButtonWrapper>
                          <STDCancelButton onClick={onClickCancelButton}>
                            취소
                          </STDCancelButton>
                          <STDSaveButton
                            onClick={() => {
                              onClickPatchButton(patchInfo);
                              setSelectedReviseYear('');
                            }}
                          >
                            저장
                          </STDSaveButton>
                        </STDBottomButtonWrapper>
                      </>
                    ) : (
                      <>
                        <LeftSection>
                          <div className="year">{year}</div>
                        </LeftSection>
                        <RightSection>
                          {newValue[year]?.map(
                            ({ _id, history_month, history_content }) => (
                              <MonthHistoryLayout key={_id}>
                                <div className="month">{history_month}월</div>
                                {history_content.reverse().map((content) => (
                                  <DetailContents>{content}</DetailContents>
                                ))}
                              </MonthHistoryLayout>
                            )
                          )}
                        </RightSection>
                      </>
                    )}
                    {mouseOnAt === year && selectedReviseYear !== year && (
                      <STDReviseButton
                        onClick={() => {
                          const newPatchInfo = yearObjValue[year].map(
                            ({
                              history_content,
                              history_month,
                              history_year,
                              _id,
                            }) => {
                              return {
                                history_content,
                                history_id: _id,
                                history_month,
                                history_year,
                              };
                            }
                          );
                          setSelectedReviseYear(year);
                          setPatchInfo(newPatchInfo);
                        }}
                      >
                        <IconPen />
                        수정
                      </STDReviseButton>
                    )}
                  </YearHistoryLayout>
                );
              })}
          </STDDetailLayout>
        );
      })}
    </>
  );
};

export default Detail;
