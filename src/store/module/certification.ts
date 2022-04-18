import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICertificationInitialState,
  ICertificationMenuType,
} from '@/interfaces';

const initialState: ICertificationInitialState = {
  certificationList: { data: [], size: 0 },
};

const slice = createSlice({
  name: 'certificationReducer',
  initialState,
  reducers: {
    setCertificationList: (
      state,
      {
        payload,
      }: PayloadAction<ICertificationInitialState['certificationList']>
    ) => {
      state.certificationList = payload;
    },
    getCertificationList: (_, __: PayloadAction<ICertificationMenuType>) => {},
  },
});

export const selectCertificationState = createSelector(
  (state: ICertificationInitialState) => state.certificationList,
  (certificationList) => {
    return {
      certificationList,
    };
  }
);

export const certification = slice.name;
export const certificationReducer = slice.reducer;
export const certificationActions = slice.actions;

export default certificationReducer;
