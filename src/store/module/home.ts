import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IHomeInitialState } from '@/interfaces';

const initialState: IHomeInitialState = {
  selectedMenu: '제품',
};

const slice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {
    setSelectedMenu: (state, { payload }: PayloadAction<string>) => {
      state.selectedMenu = payload;
    },
    getData: (_, __) => {},
  },
});

export const selectHomeState = createSelector(
  (state: IHomeInitialState) => state.selectedMenu,
  (selectedMenu) => {
    return {
      selectedMenu,
    };
  }
);

export const home = slice.name;
export const homeReducer = slice.reducer;
export const homeActions = slice.actions;

export default homeReducer;
