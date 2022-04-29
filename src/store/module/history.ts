import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IHistoryInitialState,
  IGetHistoryParams,
  IPostHistoryParams,
  IPatchHistoriesParams,
  IDeleteHistories,
} from '@/interfaces';

const initialState: IHistoryInitialState = {
  historyList: [],
};

const slice = createSlice({
  name: 'historyReducer',
  initialState,
  reducers: {
    setHistoryList: (
      state,
      { payload }: PayloadAction<IHistoryInitialState['historyList']>
    ) => {
      state.historyList = payload;
    },
    getHistoryList: (_, __: PayloadAction<IGetHistoryParams>) => {},
    postHistory: (_, __: PayloadAction<IPostHistoryParams>) => {},
    patchHistories: (_, __: PayloadAction<IPatchHistoriesParams>) => {},
    deleteHistories: (_, __: PayloadAction<IDeleteHistories>) => {},
  },
});

export const selectHistoryState = createSelector(
  (state: IHistoryInitialState) => state.historyList,
  (historyList) => {
    return {
      historyList,
    };
  }
);

export const history = slice.name;
export const historyReducer = slice.reducer;
export const historyActions = slice.actions;

export default historyReducer;
