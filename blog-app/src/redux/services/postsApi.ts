import { api } from './api'

// Define a service using a base URL and expected endpoints
export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (page: number) => `posts?_page=${page}&_per_page=5`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostsQuery } = postsApi
