import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface PostState {
  id: string
  description: string
  isDone: boolean
  createdAt: string
}

const initialState: { posts: PostState[] } = {
  posts: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostState>) => {
      state.posts = [...state.posts, action.payload]
    },
    updatePost: (state, action: PayloadAction<PostState>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) return action.payload
        return post
      })
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const deleteId = action.payload
      state.posts = state.posts.filter((post) => post.id !== deleteId)
    },
  },
})

export const selectPosts = createSelector(
  (state: RootState) => state.post,
  (data) => data.posts,
)

export const { addPost, updatePost, deletePost } = postSlice.actions

export default postSlice.reducer
