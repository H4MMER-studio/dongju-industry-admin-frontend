import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IPerformanceInitialState,
  IGetDeliveryListParams,
  IPostDelivery,
} from '@/interfaces';

const initialState: IPerformanceInitialState = {
  selectedInfo: null,
  searchList: [],
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
    setSearchList: (state, { payload }: PayloadAction<string[]>) => {
      state.searchList = payload;
    },
    getDeliveryList: (_, __: PayloadAction<IGetDeliveryListParams>) => {},
    postDelivery: (_, __: PayloadAction<IPostDelivery>) => {},
    patchDelivery: (
      _,
      __: PayloadAction<{ id: string | number; info: IPostDelivery }>
    ) => {},
    deleteDelivery: (_, __: PayloadAction<{ id: number | string }>) => {},
  },
});

export const selectPerformanceState = createSelector(
  (state: IPerformanceInitialState) => state.selectedInfo,
  (state: IPerformanceInitialState) => state.deliveryList,
  (state: IPerformanceInitialState) => state.searchList,
  (selectedInfo, deliveryList, searchList) => {
    return {
      selectedInfo,
      deliveryList,
      searchList,
    };
  }
);

export const performance = slice.name;
export const performanceReducer = slice.reducer;
export const performanceActions = slice.actions;

export default performanceReducer;
