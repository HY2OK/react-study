import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useGetPokemonQuery } from '../../redux/services/pokemon'

const BASIC_LIMIT = 20

interface Pokemon {
  name: string
  url: string
}

const PokemonListPage = () => {
  const { data: pokemonList, error, isLoading } = useGetPokemonQuery(BASIC_LIMIT)

  return (
    <div className="w-full min-h-screen bg-slate-100 p-8 flex items-center flex-col">
      <h1 className="text-3xl font-bold text-yellow-500 mb-14">POKEMON WIKI</h1>
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}
      {pokemonList && (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pokemonList.results.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.url} pokemonName={pokemon.name} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default PokemonListPage
