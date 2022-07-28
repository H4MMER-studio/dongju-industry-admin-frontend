import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType, INotice, IGetNoticeParams } from "@/interfaces";
import { API, NOTIFICATIONS_API } from "@/utils";
import { notificationActions } from "../module/notice";

export function* getNoticeListSage({ payload }: ActionType & { payload: IGetNoticeParams }) {
    try {
        const notificationList: INotice[] = yield call(
            API.GET,
            `${NOTIFICATIONS_API}?value=${payload.value}&skip=${payload.skip}&limit=${payload.limit}&sort=${payload.sort}`
        );

        yield put(notificationActions.setNotificationList(notificationList));
    } catch (error) {
        console.log("get notifications error: ", error);
    }
}

//watch
export function* watchGetNoticeList() {
    yield takeEvery(notificationActions.getNoticeList, getNoticeListSage);
}

export default [watchGetNoticeList].map((fn) => fn());
