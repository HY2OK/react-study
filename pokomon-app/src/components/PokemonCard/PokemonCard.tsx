import { useGetPokemonByNameQuery } from '../../redux/services/pokemon'

interface Props {
  pokemonName: string
}

const PokemonCard: React.FC<Props> = ({ pokemonName }) => {
  const { data: pokemonData, error, isLoading } = useGetPokemonByNameQuery(pokemonName)

  console.log(pokemonData && pokemonData)
  return (
    <li className="w-full h-[300px] bg-white shadow-xl rounded-md flex flex-col items-center relative overflow-hidden cursor-pointer">
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}

      {pokemonData && (
        <>
          <div className="absolute top-[-370px] w-[500px] h-[500px] rounded-[80%] bg-green-400 z-0" />
          <div className="absolute top-3 right-4 w-14 bg-white rounded-md text-center text-slate-700">
            {pokemonData.id}
          </div>
          <div className="w-[80%] h-[70%] mt-8 z-10">
            <img
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
              className="h-full"
            />
          </div>

          <div className="absolute bottom-12 flex justify-center items-center text-xl">
            {pokemonData.name}
          </div>

          <div className="flex justify-center items-center gap-3 mt-5">
            {pokemonData.types.map(
              ({ type }: { type: { name: string; url: string } }) => (
                <div className="text-sm px-2 text-white bg-green-500 rounded-md">
                  {type.name}
                </div>
              ),
            )}
          </div>
        </>
      )}
    </li>
  )
}

export default PokemonCard
