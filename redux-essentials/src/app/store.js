import { configureStore } from '@reduxjs/toolkit'

import PostsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
})
