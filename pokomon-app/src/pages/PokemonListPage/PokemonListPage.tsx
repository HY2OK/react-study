import ColorImporter from '../../components/ColorImporter/ColorImporter'
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
    <>
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}
      {pokemonList && (
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pokemonList.results.map((pokemon: Pokemon) => (
            <PokemonCard key={pokemon.url} pokemonName={pokemon.name} />
          ))}
        </ul>
      )}

      {/* tailwind color import */}
      <ColorImporter />
    </>
  )
}

export default PokemonListPage
