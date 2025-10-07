import React from 'react'
import '../CSS/Carts.css'
import Cart from './Cart'

export default function Carts() {
  return (
    <div >
        <h1>Carts</h1>
        <div className='Carts'>
            <Cart ID={1} Name="Cart-1" Tag="Test-Cart" Price={200} />
            <Cart ID={2} Name="Cart-2" Tag="Test-Cart" Price={100} />
            <Cart ID={3} Name="Cart-3" Tag="Test-Cart" Price={300} />
            <Cart ID={4} Name="Cart-4" Tag="Test-Cart" Price={250} />
            <Cart ID={5} Name="Cart-5" Tag="Test-Cart" Price={150} />
            <Cart ID={6} Name="Cart-6" Tag="Test-Cart" Price={350} />
        </div>
    </div>
  )
}
