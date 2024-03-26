import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetPokemonDetailsByNameQuery } from '../../redux/services/pokemon'
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail'
import { FaArrowLeft } from 'react-icons/fa'

const PokemonDetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const korName = new URLSearchParams(location.search).get('kor') || null
  const { data, error, isLoading } = useGetPokemonDetailsByNameQuery(name!)

  return (
    <div className="w-[80%] h-[750px] bg-white border-8 border-slate-800 rounded-xl flex justify-center items-center relative ">
      <div
        className="absolute top-8 left-8 text-3xl cursor-pointer z-10"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </div>
      {error && <div>error</div>}
      {isLoading && <div>loading...</div>}
      {data && <PokemonDetail data={data} korName={korName!} />}

      <div className="absolute z-[-1] w-full h-[300px] bg-slate-800" />
    </div>
  )
}

export default PokemonDetailPage
