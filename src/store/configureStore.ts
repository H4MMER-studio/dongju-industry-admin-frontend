import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import {
  createRouterMiddleware,
  initialRouterState,
} from 'connected-next-router';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './';
import rootSaga from './sagas';
import Router from 'next/router';

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state.count) nextState.count = state.count;
    if (typeof window !== 'undefined' && state?.router) {
      // preserve router value on client side navigation
      nextState.router = state.router;
    }
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware();
  const { asPath } = context.ctx || Router.router || {};
  let initialState;
  if (asPath) {
    initialState = {
      router: initialRouterState(asPath),
    };
  }

  const isProduct = process.env.NODE_ENV === 'production';

  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        isProduct
          ? [sagaMiddleware, routerMiddleware]
          : [sagaMiddleware, routerMiddleware, logger]
      ),
    devTools: !isProduct,
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
