import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PhoneBookPage from './pages/PhoneBookPage/PhoneBookPage'
import DetailPhonePage from './pages/DetailPhonePage/DetailPhonePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PhoneBookPage />,
    },
    {
      path: '/:id',
      element: <DetailPhonePage />,
    },
  ])

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
