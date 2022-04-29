import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Detail from './Detail';
import { historyActions } from '@/store/module/history';
import AddHistory from './AddHistory';
import { IPatchHistoriesParams } from '@/interfaces';

const HistoryLayout = styled.main``;

export type AddInfo = {
  selectedyear: string | number;
  selectedMonth: string | number;
  content: string;
};

const History: React.FC = () => {
  const [addInfo, setAddInfo] = useState<AddInfo>({
    selectedyear: '',
    selectedMonth: '',
    content: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyActions.getHistoryList({ isAsc: false }));
  }, []);

  const addInfoHandler = (type: keyof AddInfo, value: string | number) => {
    setAddInfo((data) => {
      return { ...data, [type]: value };
    });
  };

  const onClickAddButton = () => {
    dispatch(
      historyActions.postHistory({
        history_content: addInfo.content,
        history_month: addInfo.selectedMonth
          ? Number(addInfo.selectedMonth)
          : new Date().getMonth() + 1,
        history_year: addInfo.selectedyear
          ? Number(addInfo.selectedyear)
          : new Date().getFullYear(),
      })
    );
  };

  const onClickDeleteButton = (id: number | string) => {
    dispatch(historyActions.deleteHistories({ data: [id] }));
  };

  const onClickPatchButton = (patchInfo: IPatchHistoriesParams['data']) => {
    dispatch(historyActions.patchHistories({ data: patchInfo }));
  };

  return (
    <HistoryLayout>
      <AddHistory
        addInfo={addInfo}
        addInfoHandler={addInfoHandler}
        onClickAddButton={onClickAddButton}
      />
      <Detail
        onClickDeleteButton={onClickDeleteButton}
        onClickPatchButton={onClickPatchButton}
      />
    </HistoryLayout>
  );
};

export default History;
