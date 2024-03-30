import { api } from './api'

export interface PostDataState {
  id: string
  title: string
  body: string
}

// Define a service using a base URL and expected endpoints
export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<PostDataState[], string>({
      query: () => `posts`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery } = postsApi
