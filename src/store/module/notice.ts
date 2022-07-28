import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationInitialState, INotice, IGetNoticeParams } from "@/interfaces";

const initialState: INotificationInitialState = {
    noticeList: [],
};

const slice = createSlice({
    name: "notificationReducer",
    initialState,
    reducers: {
        setNotificationList: (state, { payload }: PayloadAction<INotificationInitialState["noticeList"]>) => {
            state.noticeList = payload;
        },
        getNoticeList: (_, __: PayloadAction<IGetNoticeParams>) => {},
    },
});

export const selectNotificationState = createSelector(
    (state: INotificationInitialState) => state.noticeList,
    (certificationList) => {
        return {
            certificationList,
        };
    }
);

export const notification = slice.name;
export const notificationReducer = slice.reducer;
export const notificationActions = slice.actions;

export default notificationReducer;
