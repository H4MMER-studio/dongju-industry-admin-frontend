import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, INotice, IGetNoticeParams } from "@/interfaces";
import { API, NOTICES_API } from "@/utils";
import { noticeActions } from "../module/notice";

export function* getNoticeListSage({ payload }: ActionType & { payload: IGetNoticeParams }) {
    try {
        const notificationList: INotice[] = yield call(
            API.GET,
            `${NOTICES_API}?value=${payload.value}&skip=${payload.skip}&limit=${payload.limit}&sort=${payload.sort}`
        );

        yield put(noticeActions.setNotificationList(notificationList));
    } catch (error) {
        console.log("get notifications error: ", error);
    }
}

//watch
export function* watchGetNoticeList() {
    yield takeEvery(noticeActions.getNoticeList, getNoticeListSage);
}

export default [watchGetNoticeList].map((fn) => fn());
