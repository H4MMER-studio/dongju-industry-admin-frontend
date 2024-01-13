import { call, put, takeEvery } from 'redux-saga/effects';
import { API, INQUIRIES_API } from '@/utils';
import { inquiry, inquiryActions } from '../module/inquiry';
import { IGetInqueriesParams, ActionType } from '@/interfaces';

export function* getInquiriesSaga({
  payload,
}: ActionType & { payload: IGetInqueriesParams }) {
  try {
    const searchParams = `&type=search&field=${payload.field}&value=${payload.value}`;
    const inquiries = yield call(
      API.GET,
      `${INQUIRIES_API}?skip=${payload.skip}&limit=${payload.limit}${
        payload.value ? searchParams : ''
      }`
    );

    yield put(inquiryActions.setInquiries(inquiries));
  } catch (err) {}
}

export function* watchGetInquiries() {
  yield takeEvery(inquiryActions.getInquiries, getInquiriesSaga);
}

export default [watchGetInquiries].map((fn) => fn());
