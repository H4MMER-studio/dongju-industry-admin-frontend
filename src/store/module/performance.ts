import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerformanceInitialState } from '@/interfaces';

const initialState: IPerformanceInitialState = {
  selectedInfo: null,
};

const slice = createSlice({
  name: 'performanceReducer',
  initialState,
  reducers: {
    setSelectedInfo: (
      state,
      { payload }: PayloadAction<IPerformanceInitialState['selectedInfo']>
    ) => {
      state.selectedInfo = payload;
    },
  },
});

export const selectPerformanceState = createSelector(
  (state: IPerformanceInitialState) => state.selectedInfo,
  (selectedInfo) => {
    return {
      selectedInfo,
    };
  }
);

export const performance = slice.name;
export const performanceReducer = slice.reducer;
export const performanceActions = slice.actions;

export default performanceReducer;
