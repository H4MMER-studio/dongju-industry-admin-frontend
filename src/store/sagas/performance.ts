import { call, put, takeEvery } from 'redux-saga/effects';
import { API, DELIVERY_LIST_API, DELIVERY_API } from '@/utils';
import { performanceActions } from '../module/performance';
import {
  ActionType,
  IGetDeliveryListParams,
  IPostDelivery,
} from '@/interfaces';
import { PostAdd } from '@mui/icons-material';

export function* getDeliveryListSaga({
  payload,
}: ActionType & { payload: IGetDeliveryListParams }) {
  try {
    const { isAsc, isSearch, limit, skip, field, value } = payload;
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_LIST_API}?skip=${skip}&limit=${limit}${
        isSearch ? `&type=search` : ''
      }${field ? `&field=${field}` : ''}&value=${value}${
        isAsc ? '' : '&sort=delivery-year+desc&sort=delivery-month+desc'
      }`
    );

    if (isSearch) {
      yield put(performanceActions.setSearchList(deliveryList.data));
    } else {
      yield put(
        performanceActions.setDeliveryList({
          list: deliveryList.data,
          size: deliveryList.size,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export function* postDeliverySaga({
  payload,
}: ActionType & { payload: IPostDelivery }) {
  try {
    yield call(API.POST, DELIVERY_API, { bodyData: payload });
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_LIST_API}?skip=${1}&limit=${10}&sort=delivery-year+desc&sort=delivery-month+desc`
    );
    yield put(
      performanceActions.setDeliveryList({
        list: deliveryList.data,
        size: deliveryList.size,
      })
    );
    alert('추가 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* patchDeliverySaga({
  payload,
}: ActionType & { payload: { id: string | number; info: IPostDelivery } }) {
  try {
    yield call(API.PATCH, `${DELIVERY_API}/${payload.id}`, {
      bodyData: payload.info,
    });
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_LIST_API}?skip=${1}&limit=${10}&sort=delivery-year+desc&sort=delivery-month+desc`
    );
    yield put(
      performanceActions.setDeliveryList({
        list: deliveryList.data,
        size: deliveryList.size,
      })
    );
    yield put(performanceActions.setSelectedInfo(null));
    alert('수정 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* deleteDeliverySaga({
  payload,
}: ActionType & { payload: { id: number | string } }) {
  try {
    yield call(API.DELETE, `${DELIVERY_API}/${payload.id}`);
    const deliveryList = yield call(
      API.GET,
      `${DELIVERY_LIST_API}?skip=${1}&limit=${10}&sort=delivery-year+desc&sort=delivery-month+desc`
    );
    yield put(
      performanceActions.setDeliveryList({
        list: deliveryList.data,
        size: deliveryList.size,
      })
    );
    alert('삭제 완료');
  } catch (error) {
    console.error(error);
  }
}

export function* watchDeliveryList() {
  yield takeEvery(performanceActions.getDeliveryList, getDeliveryListSaga);
}

export function* watchPostDelivery() {
  yield takeEvery(performanceActions.postDelivery, postDeliverySaga);
}

export function* watchPatchDelivery() {
  yield takeEvery(performanceActions.patchDelivery, patchDeliverySaga);
}

export function* watchDeleteDelivery() {
  yield takeEvery(performanceActions.deleteDelivery, deleteDeliverySaga);
}

export default [
  watchDeliveryList,
  watchPostDelivery,
  watchPatchDelivery,
  watchDeleteDelivery,
].map((fn) => fn());
