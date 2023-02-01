import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi } from '../services/Auth/AuthAPI';
import { userSlice } from '../features/clientSlice/clientSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
