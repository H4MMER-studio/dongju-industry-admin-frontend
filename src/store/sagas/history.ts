import { call, put, takeEvery } from 'redux-saga/effects';
import { API, HISTORIES_API } from '@/utils';
import { historyActions } from '../module/history';
import { IHistoryList, ActionType, IGetHistoryParams } from '@/interfaces';

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

export function* watchHistoryList() {
  yield takeEvery(historyActions.getHistoryList, getHistoryListSaga);
}

export default [watchHistoryList].map((fn) => fn());
