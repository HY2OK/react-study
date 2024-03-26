import { useNavigate } from 'react-router-dom'
import { TYPES } from '../../constants/type'
import {
  useGetPokemonByNameQuery,
  useGetPokemonKorNameQuery,
} from '../../redux/services/pokemon'
import NameSection from './NameSection/NameSection'
import ImageSection from './ImageSection/ImageSection'
import TypeSection from './TypeSection/TypeSection'

interface Props {
  pokemonName: string
}

const PokemonCard: React.FC<Props> = ({ pokemonName }) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName)
  const { data: korName, error: nameError } = useGetPokemonKorNameQuery(pokemonName, {
    skip: isLoading,
  })
  const navigate = useNavigate()

  return (
    <li
      className="w-full bg-white shadow-xl rounded-md flex flex-col items-center relative overflow-hidden cursor-pointer p-4"
      onClick={() => navigate(`${data?.name}${nameError ? '' : '?kor=' + korName}`)}
    >
      {error && <div>error</div>}
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">loading...</div>
      )}

      {data && (
        <>
          <ImageSection
            pokemonId={data.id}
            pokemonName={data.name}
            imgUrl={data.sprites}
            types={TYPES[data.types[0].type.name]}
          />

          <NameSection pokemonName={nameError ? data?.name : korName!} />

          <TypeSection typesList={data.types} types={TYPES[data.types[0].type.name]} />
        </>
      )}
    </li>
  )
}

export default PokemonCard
