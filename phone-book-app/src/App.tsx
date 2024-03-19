import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PhoneListPage from './pages/PhoneListPage/PhoneListPage'
import PhoneDetailPage from './pages/PhoneDetailPage/PhoneDetailPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PhoneListPage />,
    },
    {
      path: '/:id',
      element: <PhoneDetailPage />,
    },
  ])

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
