// import the RTK query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// define a single API slice object
export const apiSlice = createApi({
  // the cache reducer expects to be added at 'state.api'(optional)
  reducerPath: 'api',
  // all of requests will have URLs starting with '/fakeApi/'
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  // the 'endpoit' represent operations and requests for the server
  endpoints: (builder) => ({
    // the 'getPosts' endpoint is a 'query' operation that return data
    getPosts: builder.query({
      // URL for the request is '/fakeApi/posts'
      query: () => '/posts',
    }),
    getPost: builder.query({
      query: (postId) => `/post/${postId}`,
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/posts',
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
})

// export the auto-generated hook for the 'getPosts' query endpoint
export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation } =
  apiSlice
