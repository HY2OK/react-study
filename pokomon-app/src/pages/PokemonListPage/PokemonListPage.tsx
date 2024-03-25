import ColorImporter from '../../components/ColorImporter/ColorImporter'
import PageButtons from '../../components/PageButtons/PageButtons'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useAppSelector } from '../../redux/hooks'
import { useGetPokemonListQuery } from '../../redux/services/pokemon'

interface Pokemon {
  name: string
  url: string
}

const PokemonListPage = () => {
  const { currentPage } = useAppSelector((state) => state.page)
  const { data: pokemonList, error, isLoading } = useGetPokemonListQuery(currentPage)

  return (
    <>
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}
      {pokemonList && (
        <>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {pokemonList.results.map((pokemon: Pokemon) => (
              <PokemonCard key={pokemon.url} pokemonName={pokemon.name} />
            ))}
          </ul>
          <PageButtons count={pokemonList.count} />
        </>
      )}

      {/* tailwind color import */}
      <ColorImporter />
    </>
  )
}

export default PokemonListPage
