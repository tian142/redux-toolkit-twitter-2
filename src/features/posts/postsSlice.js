import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: 'Dis title 1',
    content: 'Dis content 1',
  },
  {
    id: 2,
    title: 'Dis title 2',
    content: 'Dis content 2',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
