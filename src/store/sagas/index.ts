import { all, put } from 'redux-saga/effects';
import watchHome from './home';

export default function* rootSaga() {
  yield all([...watchHome]);
}
