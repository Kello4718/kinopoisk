import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KinopoiskData } from '../types/types';

const API_URL = 'https://api.kinopoisk.dev/';

export const moviesApi = createApi({
    tagTypes: ['Movies'],
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        getMoviesData: build.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `v1.4/movie?page=${page}&limit=${limit}`,
                headers: {
                    accept: 'application/json',
                    'X-API-KEY': 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M',
                },
                method: 'GET',
            }),
            transformResponse: (response: KinopoiskData) => response.docs,
        }),
    }),
});

export const { useGetMoviesDataQuery, useLazyGetMoviesDataQuery } = moviesApi;
