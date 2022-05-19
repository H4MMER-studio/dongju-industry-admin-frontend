import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ICertificationInitialState,
  ICertificationMenuType,
  ICertificationForm,
} from '@/interfaces';

const initialState: ICertificationInitialState = {
  certificationList: { data: [], size: 0 },
  isSuccess: false,
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
    setIsSuccess: (state, { payload }: PayloadAction<boolean>) => {
      state.isSuccess = payload;
    },
    getCertificationList: (_, __: PayloadAction) => {},
    createCertification: (_, __: PayloadAction<ICertificationForm>) => {},
    deleteCertification: (_, __: PayloadAction<{ id: string }>) => {},
  },
});

export const selectCertificationState = createSelector(
  (state: ICertificationInitialState) => state.certificationList,
  (state: ICertificationInitialState) => state.isSuccess,
  (certificationList, isSuccess) => {
    return {
      certificationList,
      isSuccess,
    };
  }
);

export const certification = slice.name;
export const certificationReducer = slice.reducer;
export const certificationActions = slice.actions;

export default certificationReducer;
