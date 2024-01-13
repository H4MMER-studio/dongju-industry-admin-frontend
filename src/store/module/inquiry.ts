import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InqueryInitialState, IGetInqueriesParams } from '@/interfaces';

const initialState: InqueryInitialState = {
  inqueries: {
    data: [],
    size: 0,
  },
};

const slice = createSlice({
  name: 'inquiryReducer',
  initialState,
  reducers: {
    getInquiries: (_, __: PayloadAction<IGetInqueriesParams>) => {},
    setInquiries: (
      state,
      { payload }: PayloadAction<InqueryInitialState['inqueries']>
    ) => {
      state.inqueries = payload;
    },
  },
});

export const selectInquiryState = createSelector(
  (state: InqueryInitialState) => state.inqueries,
  (inqueries) => {
    return { inqueries };
  }
);

export const inquiry = slice.name;
export const inquiryReducer = slice.reducer;
export const inquiryActions = slice.actions;

export default inquiryReducer;
