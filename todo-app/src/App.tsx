import MemoForm from './components/MemoForm/MemoForm'
import MemoLIst from './components/MemoLIst/MemoLIst'

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="mb-5">
        <MemoForm />
      </div>
      <div>
        <MemoLIst />
      </div>
    </div>
  )
}

export default App
