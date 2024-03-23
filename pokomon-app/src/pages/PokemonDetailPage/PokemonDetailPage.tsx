import { useParams } from 'react-router-dom'

const PokemonDetailPage = () => {
  const { name } = useParams()

  return <div>{name}</div>
}

export default PokemonDetailPage
