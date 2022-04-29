import { all, put } from 'redux-saga/effects';
import watchHome from './home';
import watchPerformance from './performance';
import watchHistory from './history';
import watchCertification from './certification';

export default function* rootSaga() {
  yield all([
    ...watchHome,
    ...watchPerformance,
    ...watchHistory,
    ...watchCertification,
  ]);
}
