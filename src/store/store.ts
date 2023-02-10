import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../services/Auth/AuthAPI';
import { userSlice } from '../features/userSlice/userSlice';
// eslint-disable-next-line import/no-cycle
import { userProfileApi } from '../services/user/userProfileApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userProfileApi.reducerPath]: userProfileApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, userProfileApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
