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
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName)
  const navigate = useNavigate()

  return (
    <li
      className="w-full h-[300px] bg-white shadow-xl rounded-md flex flex-col items-center relative overflow-hidden cursor-pointer"
      onClick={() => navigate(`${data?.name}`)}
    >
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}

      {data && (
        <>
          <ImageSection
            pokemonId={data.id}
            pokemonName={data.name}
            imgUrl={data.sprites}
            types={TYPES[data.types[0].type.name]}
          />

          <NameSection pokemonName={data.name} />

          <TypeSection typesList={data.types} types={TYPES[data.types[0].type.name]} />
        </>
      )}
    </li>
  )
}

export default PokemonCard
