import { call, put, takeEvery } from 'redux-saga/effects';
import { API, CERTIFICATIONS_API } from '@/utils';
import { certificationActions } from '../module/certification';
import { ICertificationMenuType, ICertificationList } from '@/interfaces';

export function* getCertificationListSaga({
  payload,
}: {
  payload: ICertificationMenuType;
}) {
  try {
    const certificationList: ICertificationList = yield call(
      API.GET,
      `${CERTIFICATIONS_API}?value=${payload}&skip=0&limit=100&sort=certification-date%20asc`
    );
    yield put(certificationActions.setCertificationList(certificationList));
  } catch (error) {
    console.log(error);
  }
}

export function* watchCertificationList() {
  yield takeEvery(
    certificationActions.getCertificationList,
    getCertificationListSaga
  );
}

export default [watchCertificationList].map((fn) => fn());
