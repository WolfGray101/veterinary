import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IClient } from 'types/ClientDTO/ClientDTO';
import { RootState } from '../../store/store';

interface IAvatarResponse {
  filename: string,
  url: string,
}

interface IAvatarBody {
  file: File
}

export const clientApi = createApi({
  reducerPath: 'clientApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://91.241.64.154:8080/api/client/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.jwtToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    getAvatar: build.query<string, void>({
      query: () => 'avatar',
    }),
    getClientWithPets: build.query<IClient, void>({
      query: () => '',
    }),
    uploadAvatar: build.mutation<IAvatarResponse, IAvatarBody>({
      query: (body: IAvatarBody) => ({
        url: '',
        method: 'POST',
        body
      }),
    }),
  }),
});

export const { useGetAvatarQuery } = clientApi;
