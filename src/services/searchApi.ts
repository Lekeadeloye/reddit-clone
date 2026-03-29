import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface SearchParams {
  q: string;
  type?: 'posts' | 'communities' | 'users',
  sort?: 'relevance' | 'new' | 'top',
  page?: number,
  limit?: number
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'posts' | 'communities' | 'users',
  author?: string;
  commununity: string;
  score?: number;
  createdAt: string             
}

export interface SearchResponse {
  data: SearchResult[];
  page: number;
  limit: number;
  total: number
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:5000/'
  }),
  endpoints: (builder) => ({
    search: builder.query<SearchResponse, SearchParams>({
      query: (params) => ({
        url: 'search',
        params,  // serialized to ?q=...&type=...
      }),
      // Don't fire if query string is empty
      skip: (params) => !params.q.trim(),
    })
  })
})

export const {useSearchQuery} = searchApi