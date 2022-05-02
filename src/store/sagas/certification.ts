import { call, put, takeEvery } from 'redux-saga/effects';
import { API, CERTIFICATIONS_API, CERTIFICATION_API } from '@/utils';
import { certificationActions } from '../module/certification';
import {
  ICertificationList,
  ICertificationForm,
  ActionType,
} from '@/interfaces';

export function* getCertificationListSaga({}: {}) {
  try {
    const certificationList: ICertificationList = yield call(
      API.GET,
      `${CERTIFICATIONS_API}`
    );

    yield put(certificationActions.setCertificationList(certificationList));
  } catch (error) {
    console.log(error);
  }
}

export function* createCertificationSaga({
  payload,
}: ActionType & { payload: ICertificationForm }) {
  const formData = new FormData();
  var blobImage = b64toBlob(payload.certification_image);

  formData.append('certification_title', `${payload.certification_title}`);
  formData.append('certification_type', `${payload.certification_type}`);
  formData.append('files[0]', blobImage);
  if (payload.certification_start_date) {
    formData.append(
      'certification_start_date',
      payload.certification_start_date
    );
  }

  if (payload.certification_end_date) {
    formData.append('certification_end_date', payload.certification_end_date);
  }

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

const b64toBlob = (dataURI) => {
  var byteString = atob(dataURI.split(',')[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' });
};
