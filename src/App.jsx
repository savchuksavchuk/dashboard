import { useState } from 'react'
import './App.scss'
import { AdminPanel } from './components/AdminPanel/AdminPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AdminPanel />
    </div>
  )
}

export default App
