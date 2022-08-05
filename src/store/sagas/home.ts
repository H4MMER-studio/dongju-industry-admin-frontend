import { call, put, takeEvery } from 'redux-saga/effects';
import { API, LOGIN_API } from '@/utils';
import { homeActions } from '../module/home';
import { ActionType, IPostLoginParams } from '@/interfaces';
import { push } from 'connected-next-router';

export function* postLoginSaga({
  payload,
}: ActionType & { payload: IPostLoginParams }) {
  try {
    const token: { data: string } = yield call(API.POST, LOGIN_API, {
      bodyData: payload,
    });
    localStorage.setItem('dongju-admin-token', token.data);
    alert('환영합니다.');
    yield put(push('/company/history'));
  } catch (error) {
    console.error(error);
    alert('아이디 비밀번호를 확인해주세요.');
  }
}

export function* watchPostLogin() {
  yield takeEvery(homeActions.postLogin, postLoginSaga);
}

export default [watchPostLogin].map((fn) => fn());
