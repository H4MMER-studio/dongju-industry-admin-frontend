import { call, put, takeEvery } from 'redux-saga/effects';
import { API, HISTORIES_API, HISTORY_API } from '@/utils';
import { historyActions } from '../module/history';
import {
  IHistoryList,
  ActionType,
  IGetHistoryParams,
  IPostHistoryParams,
  IPatchHistoriesParams,
  IDeleteHistories,
} from '@/interfaces';

export function* getHistoryListSaga({
  payload,
}: ActionType & { payload: IGetHistoryParams }) {
  try {
    const historyList: { data: IHistoryList[] } = yield call(
      API.GET,
      `${HISTORIES_API}?${
        payload.isAsc ? '' : 'sort=history-year+desc&sort=history-month+desc'
      }`
    );
    yield put(historyActions.setHistoryList(historyList.data));
  } catch (error) {
    console.log(error);
  }
}

export function* postHistorySaga({
  payload,
}: ActionType & { payload: IPostHistoryParams }) {
  try {
    yield call(API.POST, HISTORY_API, { bodyData: payload });
    const historyList: { data: IHistoryList[] } = yield call(
      API.GET,
      `${HISTORIES_API}?sort=history-year+desc&sort=history-month+desc`
    );
    yield put(historyActions.setHistoryList(historyList.data));
    alert('추가 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* patchHistoriesSaga({
  payload,
}: ActionType & { payload: IPatchHistoriesParams }) {
  try {
    yield call(API.PATCH, HISTORIES_API, { bodyData: payload.data });
    const historyList: { data: IHistoryList[] } = yield call(
      API.GET,
      `${HISTORIES_API}?sort=history-year+desc&sort=history-month+desc`
    );
    yield put(historyActions.setHistoryList(historyList.data));
    alert('수정 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* deleteHistoriesSaga({
  payload,
}: ActionType & { payload: IDeleteHistories }) {
  try {
    yield call(API.DELETE, HISTORIES_API, { bodyData: payload.data });
    const historyList: { data: IHistoryList[] } = yield call(
      API.GET,
      `${HISTORIES_API}?sort=history-year+desc&sort=history-month+desc`
    );
    yield put(historyActions.setHistoryList(historyList.data));
    alert('삭제 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* watchGetHistoryList() {
  yield takeEvery(historyActions.getHistoryList, getHistoryListSaga);
}

export function* watchPostHistory() {
  yield takeEvery(historyActions.postHistory, postHistorySaga);
}

export function* watchPatchHistories() {
  yield takeEvery(historyActions.patchHistories, patchHistoriesSaga);
}

export function* watchDeleteHistories() {
  yield takeEvery(historyActions.deleteHistories, deleteHistoriesSaga);
}

export default [
  watchGetHistoryList,
  watchPostHistory,
  watchPatchHistories,
  watchDeleteHistories,
].map((fn) => fn());
