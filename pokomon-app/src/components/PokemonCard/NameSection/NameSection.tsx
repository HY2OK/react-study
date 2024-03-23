import { useGetPokemonKorNameQuery } from '../../../redux/services/pokemon'

const NameSection = ({ pokemonName }: { pokemonName: string }) => {
  const { data: korName, error } = useGetPokemonKorNameQuery(pokemonName)

  return (
    <div className="absolute bottom-12 flex justify-center items-center text-xl">
      {error && pokemonName}
      {korName && korName}
    </div>
  )
}

export default NameSection
