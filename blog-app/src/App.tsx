import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PostListPage from './pages/PostListPage/PostListPage'
import PostPage from './pages/PostPage/PostPage'
import Navbar from './components/Navbar/Navbar'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '',
        element: <PostListPage />,
      },
      {
        path: ':id',
        element: <PostDetailPage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
