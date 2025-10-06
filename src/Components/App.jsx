import { useEffect,useState } from 'react'
import '../CSS/App.css'
import Carts from './Carts'

function App() {
  return (
    <>
      <div className='Header'>
        <div className='Title'>Header</div>
      </div>
      <Carts/>
    </>
  )
}

export default App
