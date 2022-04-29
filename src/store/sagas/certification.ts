import { call, put, takeEvery } from 'redux-saga/effects';
import { API, CERTIFICATIONS_API, CERTIFICATION_API } from '@/utils';
import { certificationActions } from '../module/certification';
import {
  ICertificationMenuType,
  ICertificationList,
  ICertificationForm,
  ActionType,
} from '@/interfaces';

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

export function* createCertificationSaga({
  payload,
}: ActionType & { payload: ICertificationForm }) {
  console.log('최종결과:', payload);

  const formData = new FormData();

  formData.append('certification_title', `${payload.certification_title}`);
  formData.append('certification_type', `${payload.certification_type}`);
  // formData.append('files[0]', payload.certification_image);

  try {
    yield call(
      API.POST,
      `${CERTIFICATION_API}`,
      { bodyData: formData },
      'form'
    );
    alert('생성 완료');
  } catch (error) {
    console.log(error);
    alert('생성 실패');
  }
}

export function* watchCertificationList() {
  yield takeEvery(
    certificationActions.getCertificationList,
    getCertificationListSaga
  );
}

export function* watchCreateCertification() {
  yield takeEvery(
    certificationActions.createCertification,
    createCertificationSaga
  );
}

export default [watchCertificationList, watchCreateCertification].map((fn) =>
  fn()
);
