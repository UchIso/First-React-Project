import React from 'react'
import '../CSS/Carts.css'

export default function Cart({ID,Name,Tag,Price}) {
  return (
    <div key={ID} className='Cart'>
      <div className='CartInfo'>
        <h2>Cart Name: {Name}</h2>
        {isNaN(Price)? NaN :<h3>Cart Price: {Price}$</h3>}
        <h5>Cart Tag: #{Tag}</h5>
      </div>
    </div>
  )
}
