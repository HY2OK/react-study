// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface PokemonNames {
  language: { name: string; url: string }
  name: string
}

interface PokemonDetails {
  id: string
  name: string
  sprites: {
    front_default: string
    other: { 'official-artwork': { front_default: string } }
  }
  types: { slot: number; type: { name: string; url: string } }[]
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: (offset: number) => `pokemon/?limit=20&offset=${(offset - 1) * 20}`,
    }),

    getPokemonByName: builder.query({
      query: (name: string) => `pokemon/${name}`,
      transformResponse: ({ id, name, sprites, types }: PokemonDetails) => {
        const response = {
          id: id,
          name: name,
          // sprites: sprites?.front_default,
          sprites: sprites.other['official-artwork'].front_default,
          types: types,
        }
        return response
      },
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
export const {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
  useGetPokemonKorNameQuery,
} = pokemonApi
