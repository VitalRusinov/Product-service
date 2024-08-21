import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import routes from '../utils/routes.ts';
import getToken from '../utils/getToken.ts';
import { IUserRequest, IUserResponse } from '../types/IUser.js';

export const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: routes.usersPath(),
  }),
  endpoints: (builder) => ({
    getUser: builder.query<IUserResponse, undefined>({
      query: () => ({
        url: 'me',
        method: 'GET',
        headers: { 'authorization': `Token ${getToken()}` }
      }),
    }),
    loginUser: builder.mutation<IUserResponse, IUserRequest>({
      query: (userData) => ({
        url: 'login',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetUserQuery,
} = usersApi;