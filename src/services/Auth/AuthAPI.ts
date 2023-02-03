import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AuthBody, IAuthResponse } from '../../types/AuthDTO/AuthDTO';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['auth'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api',
  }),
  endpoints: (build) => ({
    getTokenWithRole: build.mutation<IAuthResponse, AuthBody>({
      query: (body: AuthBody) => ({
        url: 'auth',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
    tokenVerification: build.mutation({
      query: (token: string) => ({
        url: 'auth/token',
        method: 'POST',
        body: token,
      }),
    }),
  }),
});

export const { useGetTokenWithRoleMutation, useTokenVerificationMutation } =
  authApi;
