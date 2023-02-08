import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../store/store';
import { IProfileDto } from '../../types/UserDTO/UserDTO';

export const userProfileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/user/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getProfile: build.query({
      query: () => 'profile',
    }),
    updProfile: build.mutation({
      query: (body: IProfileDto) => ({
        url: 'profile',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useGetProfileQuery, useUpdProfileMutation } = userProfileApi;
