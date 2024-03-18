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
      <div className="w-[360px] h-[740px] grid grid-rows-10 bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
