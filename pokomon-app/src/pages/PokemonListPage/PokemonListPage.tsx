import { useGetPokemonQuery } from '../../redux/services/pokemon'

const BASIC_LIMIT = 20

const PokemonListPage = () => {
  const { data: pokemonData, error, isLoading } = useGetPokemonQuery(BASIC_LIMIT)
  console.log(pokemonData, error, isLoading)

  return <div className="w-full min-h-screen bg-slate-200"></div>
}

export default PokemonListPage
