import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authApi } from '../services/Auth/AuthAPI';
// eslint-disable-next-line import/no-cycle
import { topicApi } from '../services/user/TopicApi';

import { userSlice } from '../features/userSlice/userSlice';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [topicApi.reducerPath]: topicApi.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, topicApi.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
