import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: (id) => `users?id=${id}`
        })
    })
});

export const { useGetUsersQuery} = usersApi;