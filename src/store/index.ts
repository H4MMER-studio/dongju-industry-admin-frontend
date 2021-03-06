import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'connected-next-router';
import home from './module/home';
import performance from './module/performance';
import history from './module/history';
import certification from './module/certification';

const rootReducer = combineReducers({
  home,
  performance,
  history,
  certification,
  router: routerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

//modules
export * from './module/home';
export * from './module/performance';
export * from './module/history';
export * from './module/certification';
