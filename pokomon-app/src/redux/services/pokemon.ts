// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface PokemonNames {
  language: { name: string; url: string }
  name: string
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (limit: number) => `pokemon/?offset=0&limit=${limit}`,
    }),

    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),

    getPokemonKorName: builder.query({
      query: (name: string) => `pokemon-species/${name}`,
      transformResponse: ({ names }: { names: PokemonNames[] }) => {
        return names.filter(({ language }) => language.name === 'ko')[0].name
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonQuery, useGetPokemonKorNameQuery } =
  pokemonApi
