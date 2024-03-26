import { useLocation, useParams } from 'react-router-dom'
import { useGetPokemonDetailsByNameQuery } from '../../redux/services/pokemon'

const PokemonDetailPage = () => {
  const { name } = useParams()
  const location = useLocation()
  const korName = new URLSearchParams(location.search).get('kor') || null
  const { data, error, isLoading } = useGetPokemonDetailsByNameQuery(name!)
  console.log(data, error, isLoading)

  return <div className="w-full h-[600px] bg-white rounded-md">{korName}</div>
}

export default PokemonDetailPage
