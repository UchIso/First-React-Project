import React from 'react'
import '../CSS/Carts.css'
import Cart from './Cart'

export default function Carts() {
  return (
    <div >
        <h1>Carts</h1>
        <div className='Carts'>
            <Cart ID="1" Name="Deneme" Tag="DenemeTag" Price={2000} />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    </div>
  )
}
