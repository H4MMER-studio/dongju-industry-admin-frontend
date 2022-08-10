import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, INotice, IGetNoticeParams, PageNation } from "@/interfaces";
import { API, NOTICES_API, NOTICE_API } from "@/utils";
import { noticeActions } from "../module/notice";

export function* getNoticeListSage({ payload }: ActionType & { payload: IGetNoticeParams }) {
    try {
        const list: PageNation<INotice> = yield call(
            API.GET,
            `${NOTICES_API}?value=${payload.value}&skip=${payload.skip}&limit=${payload.limit}&sort=${payload.sort}`
        );

        if (payload.value === "notification") {
            yield put(noticeActions.setNotificationList(list));
        } else {
            yield put(noticeActions.setArchiveList(list));
        }
    } catch (error) {
        console.log("get notifications error: ", error);
    }
}

export function* deleteNoticeOrArchiveSaga({
    payload,
}: ActionType & { payload: { notice_id: string; skip: number; limit: number } }) {
    try {
        yield call(API.DELETE, `${NOTICE_API}/${payload.notice_id}`);
        // const list: PageNation<INotice> = yield call(
        //     API.GET,
        //     `${NOTICES_API}?value=${"archive"}&skip=${payload.skip}&limit=${payload.limit}&sort=${"created-at desc"}`
        // );
        // yield put(noticeActions.setArchiveList(list));
    } catch (error) {
        console.log("delete notice error:", error);
    }
}

export function* getNoticeDetailSaga({ payload }: ActionType & { payload: { noticeId: string } }) {
    try {
        const noticeDetail: {
            data: {
                current: null;
            };
        } = yield call(API.GET, `${NOTICE_API}/${payload.noticeId}`);
        yield put(noticeActions.setNoticeDetail(noticeDetail));
    } catch (error) {
        console.log("notice detail error:", error);
    }
}

//watch
export function* watchGetNoticeList() {
    yield takeEvery(noticeActions.getNoticeList, getNoticeListSage);
}

export function* watchDeleteNoticeOrArchive() {
    yield takeEvery(noticeActions.deleteNoticeOrArchive, deleteNoticeOrArchiveSaga);
}

export function* watchGetNoticeDetail() {
    yield takeEvery(noticeActions.getNoticeDetail, getNoticeDetailSaga);
}

export default [watchGetNoticeList, watchDeleteNoticeOrArchive, watchGetNoticeDetail].map((fn) => fn());
