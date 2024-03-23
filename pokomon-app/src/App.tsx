import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonListPage from './pages/PokemonListPage/PokemonListPage'
import PokemonDetailPage from './pages/PokemonDetailPage/PokemonDetailPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PokemonListPage />,
    },
    {
      path: '/:name',
      element: <PokemonDetailPage />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
