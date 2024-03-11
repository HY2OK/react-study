import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PostState {
  id: string
  description: string
  isDone: boolean
  createdAt: string
}

// interface updateState {
//   id: string
//   updatedPost: PostState
// }

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
    // updatePost: (state, action: PayloadAction<updateState>) => {
    //   const { id: postId, updatedPost } = action.payload
    //   state = state.map((post) => {
    //     if (post.id === postId) return updatedPost
    //     return post
    //   })
    // },
  },
})

export const { addPost } = postSlice.actions

export default postSlice.reducer
