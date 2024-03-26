import { useLocation, useParams } from 'react-router-dom'
import { useGetPokemonDetailsByNameQuery } from '../../redux/services/pokemon'
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'

const PokemonDetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const korName = new URLSearchParams(location.search).get('kor') || null
  const { data, error, isLoading } = useGetPokemonDetailsByNameQuery(name!)

  return (
    <div className="w-[80%] h-[700px] bg-white border-8 border-slate-800 rounded-xl flex justify-center items-center ">
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}
      {data && <PokemonDetail data={data} korName={korName!} />}

      <div className="absolute z-[-1] w-full h-[300px] bg-slate-800" />
    </div>
  )
}

export default PokemonDetailPage
