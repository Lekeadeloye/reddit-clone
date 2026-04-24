import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: 'posts',
        timeout: 5000
      })
    }),
    getPostsBySort: builder.query({
      query: (sortBy) => ({
        url: `posts?sort=${sortBy.toLowerCase()}`,
        timeout: 5000,
    })
    })
  }),
});

export const { useGetPostsQuery, useGetPostsBySortQuery } = postsApi;
