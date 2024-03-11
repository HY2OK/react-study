import { useAppSelector } from './app/hooks'
import MemoForm from './components/MemoForm/MemoForm'
import MemoLIst from './components/MemoLIst/MemoLIst'

function App() {
  const post = useAppSelector((state) => state)
  console.log(post)

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div>
        <MemoForm />
      </div>
      <div>
        <MemoLIst />
      </div>
    </div>
  )
}

export default App
