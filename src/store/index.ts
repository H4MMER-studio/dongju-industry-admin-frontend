import { combineReducers } from '@reduxjs/toolkit';
import home from './module/home';

const rootReducer = combineReducers({
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

// configure
export * from './configureStore';

//modules
export * from './module/home';
