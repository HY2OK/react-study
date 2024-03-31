import { api } from './api'

export interface PostDataState {
  id: string
  title: string
  body: string
  date?: string
}

// Define a service using a base URL and expected endpoints
export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostDataState[], void>({
      query: () => `posts`,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Posts', id } as const)),
        { type: 'Posts' as const, id: 'LIST' },
      ],
    }),
    getPostById: builder.query<PostDataState, string>({
      query: (id) => `posts/${id}`,
      providesTags: (_post, _err, id) => [{ type: 'Posts', id }],
    }),
    createPost: builder.mutation({
      query: (newPost: PostDataState) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    deletePost: builder.mutation({
      query: (id: string) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
    }),
    updatePost: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `posts/${id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: (post) => [{ type: 'Posts', id: post?.id }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
  useGetPostByIdQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi
