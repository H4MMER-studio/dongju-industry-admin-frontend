import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationInitialState, INotice, IGetNoticeParams } from "@/interfaces";

const initialState: INotificationInitialState = {
    noticeList: {
        data: [],
        size: 0,
    },
    archiveList: {
        data: [],
        size: 0,
    },
};

const slice = createSlice({
    name: "noticeReducer",
    initialState,
    reducers: {
        setNotificationList: (state, { payload }: PayloadAction<INotificationInitialState["noticeList"]>) => {
            state.noticeList = payload;
        },
        setArchiveList: (state, { payload }: PayloadAction<INotificationInitialState["noticeList"]>) => {
            state.archiveList = payload;
        },
        getNoticeList: (_, __: PayloadAction<IGetNoticeParams>) => {},
    },
});

export const selectNoticeState = createSelector(
    (state: INotificationInitialState) => state.noticeList,
    (state: INotificationInitialState) => state.archiveList,
    (noticeList, archiveList) => {
        return {
            noticeList,
            archiveList,
        };
    }
);

export const notice = slice.name;
export const noticeReducer = slice.reducer;
export const noticeActions = slice.actions;

export default noticeReducer;
