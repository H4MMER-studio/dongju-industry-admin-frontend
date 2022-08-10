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
    noticeDetail: {
        data: {
            current: null,
        },
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
        setNoticeDetail: (state, { payload }: PayloadAction<INotificationInitialState["noticeDetail"]>) => {
            state.noticeDetail = payload;
        },
        getNoticeList: (_, __: PayloadAction<IGetNoticeParams>) => {},
        deleteNoticeOrArchive: (_, __: PayloadAction<{ notice_id: string }>) => {},
        getNoticeDetail: (_, __: PayloadAction<{ noticeId: string }>) => {},
    },
});

export const selectNoticeState = createSelector(
    (state: INotificationInitialState) => state.noticeList,
    (state: INotificationInitialState) => state.archiveList,
    (state: INotificationInitialState) => state.noticeDetail,
    (noticeList, archiveList, noticeDetail) => {
        return {
            noticeList,
            archiveList,
            noticeDetail,
        };
    }
);

export const notice = slice.name;
export const noticeReducer = slice.reducer;
export const noticeActions = slice.actions;

export default noticeReducer;
