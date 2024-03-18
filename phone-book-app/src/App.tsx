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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
