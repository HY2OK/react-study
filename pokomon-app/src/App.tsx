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
    <div className="w-full min-h-screen bg-slate-100 p-8 flex items-center flex-col">
      <h1 className="text-3xl font-bold text-yellow-500 mb-14">POKEMON WIKI</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
