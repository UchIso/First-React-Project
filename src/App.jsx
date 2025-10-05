import { useEffect,useState } from 'react'
import './App.css'
import Products from './Products'

function App() {
  return (
    <>
      <h1>Products</h1>
      <hr />
      <Products Name="BMW" Price={20000} Tag="Car" />
      <hr />
      <Products Name="Samsung Galaxi S Ultra" Price={2000} Tag="Phone" />
    </>
  )
}

export default App
