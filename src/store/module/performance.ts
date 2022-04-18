import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerformanceInitialState, IGetDeliveryListParams } from '@/interfaces';

const initialState: IPerformanceInitialState = {
  selectedInfo: null,
  deliveryList: { list: [], size: 0 },
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
    setDeliveryList: (
      state,
      { payload }: PayloadAction<IPerformanceInitialState['deliveryList']>
    ) => {
      state.deliveryList = payload;
    },
    getDeliveryList: (_, __: PayloadAction<IGetDeliveryListParams>) => {},
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
