import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationInitialState, INotice, IGetNoticeParams } from "@/interfaces";

const initialState: INotificationInitialState = {
    noticeList: [],
};

const slice = createSlice({
    name: "noticeReducer",
    initialState,
    reducers: {
        setNotificationList: (state, { payload }: PayloadAction<INotificationInitialState["noticeList"]>) => {
            state.noticeList = payload;
        },
        getNoticeList: (_, __: PayloadAction<IGetNoticeParams>) => {},
    },
});

export const selectNoticeState = createSelector(
    (state: INotificationInitialState) => state.noticeList,
    (noticeList) => {
        return {
            noticeList,
        };
    }
);

export const notice = slice.name;
export const noticeReducer = slice.reducer;
export const noticeActions = slice.actions;

export default noticeReducer;
