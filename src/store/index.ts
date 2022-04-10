import { combineReducers } from '@reduxjs/toolkit';
import home from './module/home';
import performance from './module/performance';

const rootReducer = combineReducers({
  home,
  performance,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

//modules
export * from './module/home';
export * from './module/performance';
