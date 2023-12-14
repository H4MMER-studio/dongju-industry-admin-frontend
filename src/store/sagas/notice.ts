import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ActionType,
  INotice,
  IGetNoticeParams,
  PageNation,
  IPostNoticeParams,
  IPatchNoticeParams,
} from '@/interfaces';
import { API, NOTICES_API, NOTICE_API } from '@/utils';
import { noticeActions } from '../module/notice';
import { PayloadAction } from '@reduxjs/toolkit';
import { go, push } from 'connected-next-router';

export function* getNoticeListSage({
  payload,
}: ActionType & { payload: IGetNoticeParams }) {
  try {
    const list: PageNation<INotice> = yield call(
      API.GET,
      `${NOTICES_API}?value=${payload.value}&skip=${payload.skip}&limit=${payload.limit}&sort=${payload.sort}`
    );

    if (payload.value === 'notification') {
      yield put(noticeActions.setNotificationList(list));
    } else {
      yield put(noticeActions.setArchiveList(list));
    }
  } catch (error) {
    console.log('get notifications error: ', error);
  }
}

export function* deleteNoticeOrArchiveSaga({
  payload,
}: ActionType & {
  payload: {
    notice_id: string;
    skip: number;
    limit: number;
    value: 'notification' | 'archive';
  };
}) {
  try {
    yield call(API.DELETE, `${NOTICE_API}/${payload.notice_id}`);
    const list: PageNation<INotice> = yield call(
      API.GET,
      `${NOTICES_API}?value=${payload.value}&skip=${payload.skip}&limit=${
        payload.limit
      }&sort=${'created-at desc'}`
    );
    yield put(noticeActions.setArchiveList(list));
  } catch (error) {
    console.log('delete notice error:', error);
  } finally {
    const list: PageNation<INotice> = yield call(
      API.GET,
      `${NOTICES_API}?value=${payload.value}&skip=${payload.skip}&limit=${
        payload.limit
      }&sort=${'created-at desc'}`
    );
    if (payload.value === 'archive') {
      yield put(noticeActions.setArchiveList(list));
    } else {
      yield put(noticeActions.setNotificationList(list));
    }
  }
}

export function* getNoticeDetailSaga({
  payload,
}: ActionType & { payload: { noticeId: string } }) {
  try {
    const noticeDetail: {
      data: {
        current: null;
      };
    } = yield call(API.GET, `${NOTICE_API}/${payload.noticeId}`);
    yield put(noticeActions.setNoticeDetail(noticeDetail));
  } catch (error) {
    console.log('notice detail error:', error);
  }
}

export function* postNoticeSaga({
  payload,
}: PayloadAction<{ data: FormData; type: 'notification' | 'archive' }>) {
  try {
    yield call(API.POST, NOTICE_API, { bodyData: payload.data }, 'form');
    alert('게시물을 올렸습니다');
    yield put(
      push(
        payload.type === 'notification' ? '/notice/notice' : '/notice/archives'
      )
    );
  } catch (error) {
    console.error(error);
    alert('게시물 올리기를 실패했습니다.');
  }
}

export function* patchNoticeSaga({
  payload,
}: PayloadAction<IPatchNoticeParams>) {
  try {
    yield call(
      API.PATCH,
      `${NOTICE_API}/${payload.notice_id}`,
      { bodyData: payload.formData },
      'form'
    );
    alert('게시물을 수정했습니다.');
    yield put(
      push(
        payload.notice_type === 'notification'
          ? '/notice/notice'
          : '/notice/archives'
      )
    );
  } catch (error) {
    console.error(error);
    alert('게시물 올리기를 실패했습니다.');
  }
}

//watch
export function* watchGetNoticeList() {
  yield takeEvery(noticeActions.getNoticeList, getNoticeListSage);
}

export function* watchDeleteNoticeOrArchive() {
  yield takeEvery(
    noticeActions.deleteNoticeOrArchive,
    deleteNoticeOrArchiveSaga
  );
}

export function* watchGetNoticeDetail() {
  yield takeEvery(noticeActions.getNoticeDetail, getNoticeDetailSaga);
}

export function* watchPostNotice() {
  yield takeEvery(noticeActions.postNotice, postNoticeSaga);
}

export function* watchPatchNotice() {
  yield takeEvery(noticeActions.patchNotice, patchNoticeSaga);
}

export default [
  watchGetNoticeList,
  watchDeleteNoticeOrArchive,
  watchGetNoticeDetail,
  watchPostNotice,
  watchPatchNotice,
].map((fn) => fn());
