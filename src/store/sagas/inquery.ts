import { call, put, takeEvery } from 'redux-saga/effects';
import { API, INQUIRIES_API } from '@/utils';
import { inquiry, inquiryActions } from '../module/inquiry';
import { IGetInqueriesParams, ActionType } from '@/interfaces';

export function* getInquiriesSaga({
  payload,
}: ActionType & { payload: IGetInqueriesParams }) {
  console.log('문의 가져오기 통시 사가');
  try {
    console.log('호호 페이로드>>', payload);
    const inquiries = yield call(API.GET, `${INQUIRIES_API}`);
    yield put(inquiryActions.setInquiries(inquiries));
  } catch (err) {}
}

export function* watchGetInquiries() {
  yield takeEvery(inquiryActions.getInquiries, getInquiriesSaga);
}

export default [watchGetInquiries].map((fn) => fn());
