import { useNavigate } from 'react-router-dom'
import { TYPES } from '../../constants/type'
import { useGetPokemonByNameQuery } from '../../redux/services/pokemon'
import NameSection from './NameSection/NameSection'
import ImageSection from './ImageSection/ImageSection'
import TypeSection from './TypeSection/TypeSection'

interface Props {
  pokemonName: string
}

const PokemonCard: React.FC<Props> = ({ pokemonName }) => {
  const { data: pokemonData, error, isLoading } = useGetPokemonByNameQuery(pokemonName)
  const navigate = useNavigate()

  const mainType = pokemonData && pokemonData?.types[0].type.name

  return (
    <li
      className="w-full h-[300px] bg-white shadow-xl rounded-md flex flex-col items-center relative overflow-hidden cursor-pointer"
      onClick={() => navigate(`${pokemonData.name}`)}
    >
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}

      {pokemonData && (
        <>
          <ImageSection
            pokemonId={pokemonData.id}
            pokemonName={pokemonData.name}
            imgUrl={pokemonData.sprites.front_default}
            types={TYPES[mainType]}
          />

          <NameSection pokemonName={pokemonData.name} />

          <TypeSection typesList={pokemonData.types} types={TYPES[mainType]} />
        </>
      )}
    </li>
  )
}

export default PokemonCard
