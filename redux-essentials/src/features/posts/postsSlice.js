import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post', content: 'Hello!' },
  { id: '2', title: 'Seconde Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // how to create reducer
    postAdded(state, action) {
      state.push(action.payload)
    },
  },
})

// export actions
export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
