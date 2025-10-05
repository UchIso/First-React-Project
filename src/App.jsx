import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      <h1>Hello World</h1>
      <Login/>
    </>
  )
}

export default App
