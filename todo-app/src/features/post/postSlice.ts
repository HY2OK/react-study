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
    // deletePost: (state, action: PayloadAction<string>) => {
    //   const deleteId = action.payload
    //   state = state.filter((post) => post.id !== deleteId)
    // },
    updatePost: (state, action: PayloadAction<PostState>) => {
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) return action.payload
        return post
      })
    },
  },
})

export const selectPosts = createSelector(
  (state: RootState) => state.post,
  (data) => data.posts,
)

export const { addPost, updatePost } = postSlice.actions

export default postSlice.reducer
