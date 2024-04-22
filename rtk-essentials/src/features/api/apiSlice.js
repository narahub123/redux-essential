import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialState) => ({
        url: '/post',
        method: 'POST',
        body: initialState,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } =
  apiSlice
